import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Data returned by the <b>DescribeAccountAttributes</b> action.</p>
 */
export interface AccountAttributesMessage {
  __type?: "AccountAttributesMessage";
  /**
   * <p>A list of <code>AccountQuota</code> objects. Within this list, each quota has a name,
   *             a count of usage toward the quota maximum, and a maximum value for the quota.</p>
   */
  AccountQuotas?: AccountQuota[];
}

export namespace AccountAttributesMessage {
  export const filterSensitiveLog = (obj: AccountAttributesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountAttributesMessage =>
    __isa(o, "AccountAttributesMessage");
}

/**
 * <p>Describes a quota for an AWS account.</p>
 *          <p>The following are account quotas:</p>
 *          <ul>
 *             <li>
 *               <p>
 *                   <code>AllocatedStorage</code> - The total allocated storage per account, in GiB.
 *                     The used value is the total allocated storage in the account, in GiB.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>AuthorizationsPerDBSecurityGroup</code> - The number of ingress rules per DB security group.
 *                   The used value is the highest number of ingress rules in a DB security group in the account. Other
 *                   DB security groups in the account might have a lower number of ingress rules.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>CustomEndpointsPerDBCluster</code> - The number of custom endpoints per DB cluster.
 *                   The used value is the highest number of custom endpoints in a DB clusters in the account. Other
 *                   DB clusters in the account might have a lower number of custom endpoints.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBClusterParameterGroups</code> - The number of DB cluster parameter groups
 *                     per account, excluding default parameter groups. The used value is the count of
 *                     nondefault DB cluster parameter groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBClusterRoles</code> - The number of associated AWS Identity and Access Management (IAM) roles per DB cluster.
 *                   The used value is the highest number of associated IAM roles for a DB cluster in the account. Other
 *                   DB clusters in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBClusters</code> - The number of DB clusters per account.
 *                   The used value is the count of DB clusters in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBInstanceRoles</code> - The number of associated IAM roles per DB instance.
 *                   The used value is the highest number of associated IAM roles for a DB instance in the account. Other
 *                   DB instances in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBInstances</code> - The number of DB instances per account.
 *                   The used value is the count of the DB instances in the account.</p>
 *                   <p>Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB
 *                       instances apply to this quota.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBParameterGroups</code> - The number of DB parameter groups per account,
 *                     excluding default parameter groups. The used value is the count of nondefault DB
 *                     parameter groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBSecurityGroups</code> - The number of DB security groups (not VPC
 *                     security groups) per account, excluding the default security group. The used
 *                     value is the count of nondefault DB security groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBSubnetGroups</code> - The number of DB subnet groups per account.
 *                   The used value is the count of the DB subnet groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>EventSubscriptions</code> - The number of event subscriptions per account.
 *                   The used value is the count of the event subscriptions in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>ManualSnapshots</code> - The number of manual DB snapshots per account.
 *                   The used value is the count of the manual DB snapshots in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>OptionGroups</code> - The number of DB option groups per account, excluding
 *                     default option groups. The used value is the count of nondefault DB option
 *                     groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>ReadReplicasPerMaster</code> - The number of Read Replicas per DB instance.
 *                   The used value is the highest number of Read Replicas for a DB instance in the account. Other
 *                   DB instances in the account might have a lower number of Read Replicas.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>ReservedDBInstances</code> - The number of reserved DB instances per account.
 *                   The used value is the count of the active reserved DB instances in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>SubnetsPerDBSubnetGroup</code> - The number of subnets per DB subnet group.
 *                   The used value is highest number of subnets for a DB subnet group in the account. Other
 *                   DB subnet groups in the account might have a lower number of subnets.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html">Quotas for Amazon RDS</a> in the
 *                 <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html">Quotas for Amazon Aurora</a> in the
 *                 <i>Amazon Aurora User Guide</i>.</p>
 */
export interface AccountQuota {
  __type?: "AccountQuota";
  /**
   * <p>The name of the Amazon RDS quota for this AWS account.</p>
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

export type ActivityStreamMode = "async" | "sync";

export type ActivityStreamStatus =
  | "started"
  | "starting"
  | "stopped"
  | "stopping";

export interface AddRoleToDBClusterMessage {
  __type?: "AddRoleToDBClusterMessage";
  /**
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be associated with.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB
   *             cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace AddRoleToDBClusterMessage {
  export const filterSensitiveLog = (obj: AddRoleToDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddRoleToDBClusterMessage =>
    __isa(o, "AddRoleToDBClusterMessage");
}

export interface AddRoleToDBInstanceMessage {
  __type?: "AddRoleToDBInstanceMessage";
  /**
   * <p>The name of the DB instance to associate the IAM role with.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be associated with.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.
   *         </p>
   */
  FeatureName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for
   *             example <code>arn:aws:iam::123456789012:role/AccessRole</code>. </p>
   */
  RoleArn: string | undefined;
}

export namespace AddRoleToDBInstanceMessage {
  export const filterSensitiveLog = (obj: AddRoleToDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddRoleToDBInstanceMessage =>
    __isa(o, "AddRoleToDBInstanceMessage");
}

export interface AddSourceIdentifierToSubscriptionMessage {
  __type?: "AddSourceIdentifierToSubscriptionMessage";
  SourceIdentifier: string | undefined;
  SubscriptionName: string | undefined;
}

export namespace AddSourceIdentifierToSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: AddSourceIdentifierToSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddSourceIdentifierToSubscriptionMessage =>
    __isa(o, "AddSourceIdentifierToSubscriptionMessage");
}

export interface AddSourceIdentifierToSubscriptionResult {
  __type?: "AddSourceIdentifierToSubscriptionResult";
  EventSubscription?: EventSubscription;
}

export namespace AddSourceIdentifierToSubscriptionResult {
  export const filterSensitiveLog = (
    obj: AddSourceIdentifierToSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddSourceIdentifierToSubscriptionResult =>
    __isa(o, "AddSourceIdentifierToSubscriptionResult");
}

export interface AddTagsToResourceMessage {
  __type?: "AddTagsToResourceMessage";
  ResourceName: string | undefined;
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceMessage {
  export const filterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceMessage =>
    __isa(o, "AddTagsToResourceMessage");
}

export type ApplyMethod = "immediate" | "pending-reboot";

/**
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  __type?: "ApplyPendingMaintenanceActionMessage";
  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>,
   *           <code>hardware-maintenance</code>, <code>ca-certificate-rotation</code>
   *          </p>
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in
   *            request of type <code>immediate</code> can't be undone.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during
   *             the next maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code>
   *             opt-in requests.</p>
   *             </li>
   *          </ul>
   */
  OptInType: string | undefined;

  /**
   * <p>The RDS Amazon Resource Name (ARN) of the resource that the
   *       pending maintenance action applies to. For information about
   *       creating an ARN,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *         Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceIdentifier: string | undefined;
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

export interface ApplyPendingMaintenanceActionResult {
  __type?: "ApplyPendingMaintenanceActionResult";
  /**
   * <p>Describes the pending maintenance actions for a resource.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResult {
  export const filterSensitiveLog = (
    obj: ApplyPendingMaintenanceActionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplyPendingMaintenanceActionResult =>
    __isa(o, "ApplyPendingMaintenanceActionResult");
}

/**
 * <p>The specified CIDR IP range or Amazon EC2 security group is already authorized for
 *             the specified DB security group.</p>
 */
export interface AuthorizationAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: AuthorizationAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationAlreadyExistsFault =>
    __isa(o, "AuthorizationAlreadyExistsFault");
}

/**
 * <p>The specified CIDR IP range or Amazon EC2 security group might not be authorized
 *             for the specified DB security group.</p>
 *         <p>Or, RDS might not be authorized to perform necessary actions using IAM on your
 *             behalf.</p>
 */
export interface AuthorizationNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  export const filterSensitiveLog = (obj: AuthorizationNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationNotFoundFault =>
    __isa(o, "AuthorizationNotFoundFault");
}

/**
 * <p>The DB security group authorization quota has been reached.</p>
 */
export interface AuthorizationQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: AuthorizationQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizationQuotaExceededFault =>
    __isa(o, "AuthorizationQuotaExceededFault");
}

export interface AuthorizeDBSecurityGroupIngressMessage {
  __type?: "AuthorizeDBSecurityGroupIngressMessage";
  CIDRIP?: string;
  DBSecurityGroupName: string | undefined;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}

export namespace AuthorizeDBSecurityGroupIngressMessage {
  export const filterSensitiveLog = (
    obj: AuthorizeDBSecurityGroupIngressMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizeDBSecurityGroupIngressMessage =>
    __isa(o, "AuthorizeDBSecurityGroupIngressMessage");
}

export interface AuthorizeDBSecurityGroupIngressResult {
  __type?: "AuthorizeDBSecurityGroupIngressResult";
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace AuthorizeDBSecurityGroupIngressResult {
  export const filterSensitiveLog = (
    obj: AuthorizeDBSecurityGroupIngressResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizeDBSecurityGroupIngressResult =>
    __isa(o, "AuthorizeDBSecurityGroupIngressResult");
}

export enum AuthScheme {
  SECRETS = "SECRETS"
}

export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  Name?: string;
  ProvisionedIopsCapable?: boolean;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZone =>
    __isa(o, "AvailabilityZone");
}

/**
 * <p>Contains the available processor feature information for the DB instance class of a DB instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the
 *                 Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 */
export interface AvailableProcessorFeature {
  __type?: "AvailableProcessorFeature";
  /**
   * <p>The allowed values for the processor feature of the DB instance class.</p>
   */
  AllowedValues?: string;

  /**
   * <p>The default value for the processor feature of the DB instance class.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code>
   *             and <code>threadsPerCore</code>.</p>
   */
  Name?: string;
}

export namespace AvailableProcessorFeature {
  export const filterSensitiveLog = (obj: AvailableProcessorFeature): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailableProcessorFeature =>
    __isa(o, "AvailableProcessorFeature");
}

/**
 * <p></p>
 */
export interface BacktrackDBClusterMessage {
  __type?: "BacktrackDBClusterMessage";
  /**
   * <p>The timestamp of the time to backtrack the DB cluster to, specified in ISO
   *             8601 format. For more information about ISO 8601, see the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *             page.</a>
   *          </p>
   *         <note>
   *             <p>If the specified time isn't a consistent time for the DB cluster,
   *                 Aurora automatically chooses the nearest possible consistent time for the DB cluster.</p>
   *         </note>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain a valid ISO 8601 timestamp.</p>
   *             </li>
   *             <li>
   *                 <p>Can't contain a timestamp set in the future.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>2017-07-08T18:00Z</code>
   *          </p>
   */
  BacktrackTo: Date | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster to be backtracked. This parameter is
   *             stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>A value that indicates whether to force the DB cluster to backtrack when binary logging is
   *             enabled. Otherwise, an error occurs when binary logging is enabled.</p>
   */
  Force?: boolean;

  /**
   * <p>A value that indicates whether to backtrack the DB cluster to the earliest possible
   *             backtrack time when <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time. When this parameter is disabled and <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time, an error occurs.</p>
   */
  UseEarliestTimeOnPointInTimeUnavailable?: boolean;
}

export namespace BacktrackDBClusterMessage {
  export const filterSensitiveLog = (obj: BacktrackDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is BacktrackDBClusterMessage =>
    __isa(o, "BacktrackDBClusterMessage");
}

export interface BackupPolicyNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "BackupPolicyNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace BackupPolicyNotFoundFault {
  export const filterSensitiveLog = (obj: BackupPolicyNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackupPolicyNotFoundFault =>
    __isa(o, "BackupPolicyNotFoundFault");
}

/**
 * <p>A CA certificate for an AWS account.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The unique key that identifies a certificate.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>The type of the certificate.</p>
   */
  CertificateType?: string;

  /**
   * <p>Whether there is an override for the default certificate identifier.</p>
   */
  CustomerOverride?: boolean;

  /**
   * <p>If there is an override for the default certificate identifier, when the override
   *             expires.</p>
   */
  CustomerOverrideValidTill?: Date;

  /**
   * <p>The thumbprint of the certificate.</p>
   */
  Thumbprint?: string;

  /**
   * <p>The starting date from which the certificate is valid.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The final date that the certificate continues to be valid.</p>
   */
  ValidTill?: Date;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Certificate => __isa(o, "Certificate");
}

/**
 * <p>Data returned by the <b>DescribeCertificates</b> action.</p>
 */
export interface CertificateMessage {
  __type?: "CertificateMessage";
  /**
   * <p>The list of <code>Certificate</code> objects for the AWS account.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribeCertificates</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace CertificateMessage {
  export const filterSensitiveLog = (obj: CertificateMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateMessage =>
    __isa(o, "CertificateMessage");
}

/**
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an
 *         existing certificate.
 *         </p>
 */
export interface CertificateNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CertificateNotFoundFault {
  export const filterSensitiveLog = (obj: CertificateNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateNotFoundFault =>
    __isa(o, "CertificateNotFoundFault");
}

export interface CharacterSet {
  __type?: "CharacterSet";
  CharacterSetDescription?: string;
  CharacterSetName?: string;
}

export namespace CharacterSet {
  export const filterSensitiveLog = (obj: CharacterSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is CharacterSet => __isa(o, "CharacterSet");
}

/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch
 *             Logs for a specific DB instance or DB cluster.</p>
 *         <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported
 *             (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB
 *             engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon
 *                 RDS User Guide</i>.</p>
 */
export interface CloudwatchLogsExportConfiguration {
  __type?: "CloudwatchLogsExportConfiguration";
  /**
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: string[];

  /**
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: string[];
}

export namespace CloudwatchLogsExportConfiguration {
  export const filterSensitiveLog = (
    obj: CloudwatchLogsExportConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudwatchLogsExportConfiguration =>
    __isa(o, "CloudwatchLogsExportConfiguration");
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.</p>
 */
export interface ConnectionPoolConfiguration {
  __type?: "ConnectionPoolConfiguration";
  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   *          <p>Default: 120</p>
   *          <p>Constraints: between 1 and 3600, or 0 representing unlimited</p>
   */
  ConnectionBorrowTimeout?: number;

  /**
   * <p>
   *         One or more SQL statements for the proxy to run when opening each new database connection.
   *         Typically used with <code>SET</code> statements to make sure that each connection has identical
   *         settings such as time zone and character set. For multiple statements, use semicolons as the separator.
   *         You can also include multiple variables in a single <code>SET</code> statement, such as
   *         <code>SET x=1, y=2</code>.
   *       </p>
   *          <p>Default: no initialization query</p>
   */
  InitQuery?: string;

  /**
   * <p>The maximum size of the connection pool for each target in a target group. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: between 1 and 100</p>
   */
  MaxConnectionsPercent?: number;

  /**
   * <p>
   *         Controls how actively the proxy closes idle database connections in the connection pool.
   *         A high value enables the proxy to leave a high percentage of idle connections open.
   *         A low value causes the proxy to close idle client connections and return the underlying
   *         database connections to the connection pool. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *       </p>
   *          <p>Default: 50</p>
   *          <p>Constraints: between 0 and <code>MaxConnectionsPercent</code>
   *          </p>
   */
  MaxIdleConnectionsPercent?: number;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior.</p>
   *          <p>Default: no session pinning filters</p>
   */
  SessionPinningFilters?: string[];
}

export namespace ConnectionPoolConfiguration {
  export const filterSensitiveLog = (
    obj: ConnectionPoolConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConnectionPoolConfiguration =>
    __isa(o, "ConnectionPoolConfiguration");
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.</p>
 */
export interface ConnectionPoolConfigurationInfo {
  __type?: "ConnectionPoolConfigurationInfo";
  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   */
  ConnectionBorrowTimeout?: number;

  /**
   * <p>
   *         One or more SQL statements for the proxy to run when opening each new database connection.
   *         Typically used with <code>SET</code> statements to make sure that each connection has identical
   *         settings such as time zone and character set. This setting is empty by default.
   *         For multiple statements, use semicolons as the separator.
   *         You can also include multiple variables in a single <code>SET</code> statement, such as
   *         <code>SET x=1, y=2</code>.
   *       </p>
   */
  InitQuery?: string;

  /**
   * <p>The maximum size of the connection pool for each target in a target group. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   */
  MaxConnectionsPercent?: number;

  /**
   * <p>
   *         Controls how actively the proxy closes idle database connections in the connection pool.
   *         A high value enables the proxy to leave a high percentage of idle connections open.
   *         A low value causes the proxy to close idle client connections and return the underlying database connections to the connection pool.
   *         For Aurora MySQL, it is expressed as a percentage of the <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *       </p>
   */
  MaxIdleConnectionsPercent?: number;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior. Currently, the only
   *         allowed value is <code>EXCLUDE_VARIABLE_SETS</code>.</p>
   */
  SessionPinningFilters?: string[];
}

export namespace ConnectionPoolConfigurationInfo {
  export const filterSensitiveLog = (
    obj: ConnectionPoolConfigurationInfo
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConnectionPoolConfigurationInfo =>
    __isa(o, "ConnectionPoolConfigurationInfo");
}

export interface CopyDBClusterParameterGroupMessage {
  __type?: "CopyDBClusterParameterGroupMessage";
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group.
   *             For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon Aurora User Guide</i>.
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must specify a valid DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB cluster parameter group is in the same AWS Region as the copy,
   *                 specify a valid DB parameter group identifier, for example
   *                 <code>my-db-cluster-param-group</code>, or a valid ARN.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB parameter group is in a different AWS Region than the copy,
   *                 specify a valid DB cluster parameter group ARN, for example
   *                 <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  Tags?: Tag[];
  /**
   * <p>A description for the copied DB cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-param-group1</code>
   *         </p>
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;
}

export namespace CopyDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CopyDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterParameterGroupMessage =>
    __isa(o, "CopyDBClusterParameterGroupMessage");
}

export interface CopyDBClusterParameterGroupResult {
  __type?: "CopyDBClusterParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.
   *         </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.
   *         </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CopyDBClusterParameterGroupResult {
  export const filterSensitiveLog = (
    obj: CopyDBClusterParameterGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterParameterGroupResult =>
    __isa(o, "CopyDBClusterParameterGroupResult");
}

/**
 * <p></p>
 */
export interface CopyDBClusterSnapshotMessage {
  __type?: "CopyDBClusterSnapshotMessage";
  /**
   * <p>A value that indicates whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot.
   *             By default, tags are not copied.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The AWS AWS KMS key ID for an encrypted DB cluster snapshot.
   *             The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p>
   *
   *         <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key.
   *             If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.
   *         </p>
   *
   *         <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for <code>KmsKeyId</code>. </p>
   *
   *         <p>To copy an encrypted DB cluster snapshot to another AWS Region, you must set <code>KmsKeyId</code> to the KMS key ID you want to use to encrypt the copy of the DB cluster snapshot
   *             in the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region
   *             in another AWS Region.</p>
   *
   *         <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter,
   *             an error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> API action in the AWS Region that contains the
   *             source DB cluster snapshot to copy. The <code>PreSignedUrl</code> parameter must be used when copying an encrypted DB cluster snapshot from another AWS Region.
   *             Don't specify <code>PreSignedUrl</code> when you are copying an encrypted DB cluster snapshot in the same AWS Region.</p>
   *         <p>The pre-signed URL must be a valid request for the <code>CopyDBSClusterSnapshot</code> API action that can be
   *             executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied.
   *             The pre-signed URL request must contain the following parameter values:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB
   *                 cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code>
   *                 action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster
   *                 snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example,
   *                 if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code>
   *                 looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p>
   *             </li>
   *          </ul>
   *
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *
   *         <note>
   *             <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                 request for the operation that can be executed in the source AWS Region.</p>
   *         </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive.</p>
   *          <p>You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to another.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in a different AWS Region than the copy,
   *               specify a valid DB cluster snapshot ARN. For more information, go to
   *               <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html#USER_CopySnapshot.AcrossRegions">
   *                   Copying Snapshots Across AWS Regions</a> in the <i>Amazon Aurora User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  Tags?: Tag[];
  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot2</code>
   *          </p>
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;
}

export namespace CopyDBClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: CopyDBClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterSnapshotMessage =>
    __isa(o, "CopyDBClusterSnapshotMessage");
}

export interface CopyDBClusterSnapshotResult {
  __type?: "CopyDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.
   *       </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CopyDBClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: CopyDBClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBClusterSnapshotResult =>
    __isa(o, "CopyDBClusterSnapshotResult");
}

/**
 * <p></p>
 */
export interface CopyDBParameterGroupMessage {
  __type?: "CopyDBParameterGroupMessage";
  /**
   * <p>
   *         The identifier or ARN for the source DB parameter group.
   *         For information about
   *         creating an ARN,
   *         see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *             Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must specify a valid DB parameter group identifier, for example
   *                 <code>my-db-param-group</code>, or a valid ARN.</p>
   *             </li>
   *          </ul>
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  Tags?: Tag[];
  /**
   * <p>A description for the copied DB parameter group.</p>
   */
  TargetDBParameterGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-db-parameter-group</code>
   *          </p>
   */
  TargetDBParameterGroupIdentifier: string | undefined;
}

export namespace CopyDBParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CopyDBParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBParameterGroupMessage =>
    __isa(o, "CopyDBParameterGroupMessage");
}

export interface CopyDBParameterGroupResult {
  __type?: "CopyDBParameterGroupResult";
  DBParameterGroup?: DBParameterGroup;
}

export namespace CopyDBParameterGroupResult {
  export const filterSensitiveLog = (obj: CopyDBParameterGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBParameterGroupResult =>
    __isa(o, "CopyDBParameterGroupResult");
}

export interface CopyDBSnapshotMessage {
  __type?: "CopyDBSnapshotMessage";
  SourceDBSnapshotIdentifier: string | undefined;
  Tags?: Tag[];
  TargetDBSnapshotIdentifier: string | undefined;
}

export namespace CopyDBSnapshotMessage {
  export const filterSensitiveLog = (obj: CopyDBSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBSnapshotMessage =>
    __isa(o, "CopyDBSnapshotMessage");
}

export interface CopyDBSnapshotResult {
  __type?: "CopyDBSnapshotResult";
  DBSnapshot?: DBSnapshot;
}

export namespace CopyDBSnapshotResult {
  export const filterSensitiveLog = (obj: CopyDBSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyDBSnapshotResult =>
    __isa(o, "CopyDBSnapshotResult");
}

/**
 * <p></p>
 */
export interface CopyOptionGroupMessage {
  __type?: "CopyOptionGroupMessage";
  /**
   * <p>The identifier or ARN for the source option group. For information about
   *       creating an ARN,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *           Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid option group.</p>
   *             </li>
   *             <li>
   *                <p>If the source option group is in the same AWS Region as the copy,
   *                 specify a valid option group identifier, for example <code>my-option-group</code>,
   *                 or a valid ARN.</p>
   *             </li>
   *             <li>
   *                <p>If the source option group is in a different AWS Region than the copy,
   *                 specify a valid option group ARN, for example
   *                 <code>arn:aws:rds:us-west-2:123456789012:og:special-options</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceOptionGroupIdentifier: string | undefined;

  Tags?: Tag[];
  /**
   * <p>The description for the copied option group.</p>
   */
  TargetOptionGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied option group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-option-group</code>
   *          </p>
   */
  TargetOptionGroupIdentifier: string | undefined;
}

export namespace CopyOptionGroupMessage {
  export const filterSensitiveLog = (obj: CopyOptionGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyOptionGroupMessage =>
    __isa(o, "CopyOptionGroupMessage");
}

export interface CopyOptionGroupResult {
  __type?: "CopyOptionGroupResult";
  OptionGroup?: OptionGroup;
}

export namespace CopyOptionGroupResult {
  export const filterSensitiveLog = (obj: CopyOptionGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyOptionGroupResult =>
    __isa(o, "CopyOptionGroupResult");
}

/**
 * <p></p>
 */
export interface CreateCustomAvailabilityZoneMessage {
  __type?: "CreateCustomAvailabilityZoneMessage";
  /**
   * <p>The name of the custom Availability Zone (AZ).</p>
   */
  CustomAvailabilityZoneName: string | undefined;

  /**
   * <p>The ID of an existing virtual private network (VPN) between the Amazon RDS website and
   *             the VMware vSphere cluster.</p>
   */
  ExistingVpnId?: string;

  /**
   * <p>The name of a new VPN tunnel between the Amazon RDS website and the VMware vSphere cluster.</p>
   *         <p>Specify this parameter only if <code>ExistingVpnId</code> isn't specified.</p>
   */
  NewVpnTunnelName?: string;

  /**
   * <p>The IP address of network traffic from your on-premises data center. A custom AZ receives the network traffic.</p>
   *         <p>Specify this parameter only if <code>ExistingVpnId</code> isn't specified.</p>
   */
  VpnTunnelOriginatorIP?: string;
}

export namespace CreateCustomAvailabilityZoneMessage {
  export const filterSensitiveLog = (
    obj: CreateCustomAvailabilityZoneMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCustomAvailabilityZoneMessage =>
    __isa(o, "CreateCustomAvailabilityZoneMessage");
}

export interface CreateCustomAvailabilityZoneResult {
  __type?: "CreateCustomAvailabilityZoneResult";
  /**
   * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
   *         <p>For more information about RDS on VMware, see the
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
   *                 <i>RDS on VMware User Guide.</i>
   *             </a>
   *          </p>
   */
  CustomAvailabilityZone?: CustomAvailabilityZone;
}

export namespace CreateCustomAvailabilityZoneResult {
  export const filterSensitiveLog = (
    obj: CreateCustomAvailabilityZoneResult
  ): any => ({
    ...obj,
    ...(obj.CustomAvailabilityZone && {
      CustomAvailabilityZone: CustomAvailabilityZone.filterSensitiveLog(
        obj.CustomAvailabilityZone
      )
    })
  });
  export const isa = (o: any): o is CreateCustomAvailabilityZoneResult =>
    __isa(o, "CreateCustomAvailabilityZoneResult");
}

export interface CreateDBClusterEndpointMessage {
  __type?: "CreateDBClusterEndpointMessage";
  /**
   * <p>The identifier to use for the new endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType: string | undefined;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>The tags to be assigned to the Amazon RDS resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterEndpointMessage {
  export const filterSensitiveLog = (
    obj: CreateDBClusterEndpointMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterEndpointMessage =>
    __isa(o, "CreateDBClusterEndpointMessage");
}

/**
 * <p></p>
 */
export interface CreateDBClusterMessage {
  __type?: "CreateDBClusterMessage";
  /**
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on
   *             AWS Regions and Availability Zones, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html">Choosing the Regions and
   *                 Availability Zones</a> in the <i>Amazon Aurora User Guide</i>.
   *         </p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0. </p>
   *          <p>Default: 0</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of days for which automated backups are retained.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified CharacterSet.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>
   *             The name of the DB cluster parameter group to associate
   *             with this DB cluster. If you do not specify a value, then
   *           the default DB cluster parameter group for the specified DB engine and version is used.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not
   *             provide a name, Amazon RDS will not create a database in the DB cluster you are
   *             creating.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint
   *             is disabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *             SQL queries on the Aurora Serverless DB cluster. You can also query your database
   *             from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *          <p>Valid Values: <code>aurora</code> (for MySQL 5.6-compatible Aurora), <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), and <code>aurora-postgresql</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   *         <p>Limitations and requirements apply to some DB engine modes. For more information, see the
   *             following sections in the <i>Amazon Aurora User Guide</i>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations">
   *                     Limitations of Aurora Serverless</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-parallel-query.html#aurora-mysql-parallel-query-limitations">
   *                     Limitations of Parallel Query</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations">
   *                     Requirements for Aurora Global Databases</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html#aurora-multi-master-limitations">
   *                     Limitations of Multi-Master Clusters</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineMode?: string;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>
   *         The global cluster ID of an Aurora cluster that becomes the primary cluster
   *         in the new global database cluster.
   *       </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
   *             key. If you are creating a DB cluster with the same AWS account that owns the KMS
   *             encryption key used to encrypt the new DB cluster, then you can use the KMS key alias
   *             instead of the ARN for the KMS encryption key.</p>
   *         <p>If an encryption key isn't specified in <code>KmsKeyId</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted
   *                     source, then Amazon RDS will use the encryption key used to encrypt the
   *                     source. Otherwise, Amazon RDS will use your default encryption key. </p>
   *             </li>
   *             <li>
   *                 <p>If the <code>StorageEncrypted</code> parameter is enabled and
   *                         <code>ReplicationSourceIdentifier</code> isn't specified, then Amazon RDS
   *                     will use your default encryption key.</p>
   *             </li>
   *          </ul>
   *         <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account
   *             has a different default encryption key for each AWS Region.</p>
   *         <p>If you create a Read Replica of an encrypted DB cluster in another AWS Region, you must
   *             set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This
   *             key is used to encrypt the Read Replica in that AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.</p>
   *          <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *          <p>
   *             Default: <code>3306</code> if engine is set as aurora or <code>5432</code> if set to aurora-postgresql.
   *       </p>
   */
  Port?: number;

  /**
   * <p>A URL that contains a Signature Version 4 signed request for
   *             the <code>CreateDBCluster</code> action to be called in the source AWS Region where the DB cluster is replicated from.
   *             You only need to specify <code>PreSignedUrl</code> when you are performing cross-region replication from an encrypted DB cluster.</p>
   *
   *         <p>The pre-signed URL must be a valid request for the <code>CreateDBCluster</code> API action
   *             that can be executed in the source AWS Region that contains the encrypted DB cluster to be copied.</p>
   *         <p>The pre-signed URL request must contain the following parameter values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of
   *                 the DB cluster in the destination AWS Region. This should refer to the same KMS key for both the <code>CreateDBCluster</code>
   *                 action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The name of the AWS Region that Aurora Read Replica will be created in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied.
   *                 This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an
   *                 encrypted DB cluster from the us-west-2 AWS Region, then your <code>ReplicationSourceIdentifier</code> would look like
   *                 Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1</code>.</p>
   *             </li>
   *          </ul>
   *
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *         <note>
   *             <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                 request for the operation that can be executed in the source AWS Region.</p>
   *         </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled
   *         using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *          <p>The default is a 30-minute window selected at random from an
   *         8-hour block of time for each AWS Region.
   *         To see the time blocks available, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *             Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>A value that indicates whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Tags to assign to the DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace CreateDBClusterMessage {
  export const filterSensitiveLog = (obj: CreateDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterMessage =>
    __isa(o, "CreateDBClusterMessage");
}

/**
 * <p></p>
 */
export interface CreateDBClusterParameterGroupMessage {
  __type?: "CreateDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster
   *           parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>aurora5.6</code>, <code>aurora-mysql5.7</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>aurora-postgresql9.6</code>
   *          </p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>Tags to assign to the DB cluster parameter group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterParameterGroupMessage =>
    __isa(o, "CreateDBClusterParameterGroupMessage");
}

export interface CreateDBClusterParameterGroupResult {
  __type?: "CreateDBClusterParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.
   *         </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.
   *         </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CreateDBClusterParameterGroupResult {
  export const filterSensitiveLog = (
    obj: CreateDBClusterParameterGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterParameterGroupResult =>
    __isa(o, "CreateDBClusterParameterGroupResult");
}

export interface CreateDBClusterResult {
  __type?: "CreateDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace CreateDBClusterResult {
  export const filterSensitiveLog = (obj: CreateDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterResult =>
    __isa(o, "CreateDBClusterResult");
}

/**
 * <p></p>
 */
export interface CreateDBClusterSnapshotMessage {
  __type?: "CreateDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1-snapshot1</code>
   *          </p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the DB cluster snapshot.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: CreateDBClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterSnapshotMessage =>
    __isa(o, "CreateDBClusterSnapshotMessage");
}

export interface CreateDBClusterSnapshotResult {
  __type?: "CreateDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.
   *       </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CreateDBClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: CreateDBClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBClusterSnapshotResult =>
    __isa(o, "CreateDBClusterSnapshotResult");
}

export interface CreateDBInstanceMessage {
  __type?: "CreateDBInstanceMessage";
  AllocatedStorage: number | undefined;
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  BackupRetentionPeriod?: number;
  CharacterSetName?: string;
  DBInstanceClass: string | undefined;
  DBInstanceIdentifier: string | undefined;
  DBName?: string;
  DBParameterGroupName?: string;
  DBSecurityGroups?: string[];
  DBSubnetGroupName?: string;
  Engine: string | undefined;
  EngineVersion?: string;
  Iops?: number;
  LicenseModel?: string;
  MasterUserPassword: string | undefined;
  MasterUsername: string | undefined;
  MultiAZ?: boolean;
  OptionGroupName?: string;
  Port?: number;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  VpcSecurityGroupIds?: string[];
}

export namespace CreateDBInstanceMessage {
  export const filterSensitiveLog = (obj: CreateDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBInstanceMessage =>
    __isa(o, "CreateDBInstanceMessage");
}

export interface CreateDBInstanceReadReplicaMessage {
  __type?: "CreateDBInstanceReadReplicaMessage";
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  DBInstanceClass?: string;
  DBInstanceIdentifier: string | undefined;
  DBSubnetGroupName?: string;
  Iops?: number;
  OptionGroupName?: string;
  Port?: number;
  PubliclyAccessible?: boolean;
  SourceDBInstanceIdentifier: string | undefined;
  Tags?: Tag[];
}

export namespace CreateDBInstanceReadReplicaMessage {
  export const filterSensitiveLog = (
    obj: CreateDBInstanceReadReplicaMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBInstanceReadReplicaMessage =>
    __isa(o, "CreateDBInstanceReadReplicaMessage");
}

export interface CreateDBInstanceReadReplicaResult {
  __type?: "CreateDBInstanceReadReplicaResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceReadReplicaResult {
  export const filterSensitiveLog = (
    obj: CreateDBInstanceReadReplicaResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBInstanceReadReplicaResult =>
    __isa(o, "CreateDBInstanceReadReplicaResult");
}

export interface CreateDBInstanceResult {
  __type?: "CreateDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceResult {
  export const filterSensitiveLog = (obj: CreateDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBInstanceResult =>
    __isa(o, "CreateDBInstanceResult");
}

export interface CreateDBParameterGroupMessage {
  __type?: "CreateDBParameterGroupMessage";
  DBParameterGroupFamily: string | undefined;
  DBParameterGroupName: string | undefined;
  Description: string | undefined;
}

export namespace CreateDBParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateDBParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBParameterGroupMessage =>
    __isa(o, "CreateDBParameterGroupMessage");
}

export interface CreateDBParameterGroupResult {
  __type?: "CreateDBParameterGroupResult";
  DBParameterGroup?: DBParameterGroup;
}

export namespace CreateDBParameterGroupResult {
  export const filterSensitiveLog = (
    obj: CreateDBParameterGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBParameterGroupResult =>
    __isa(o, "CreateDBParameterGroupResult");
}

export interface CreateDBProxyRequest {
  __type?: "CreateDBProxyRequest";
  /**
   * <p>The authorization mechanism that the proxy uses.</p>
   */
  Auth: UserAuthConfig[] | undefined;

  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets
   *         network traffic to and from the database. Currently, this value is always <code>MYSQL</code>. The engine family applies to
   *         both RDS MySQL and Aurora MySQL.</p>
   */
  EngineFamily: EngineFamily | string | undefined;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.</p>
   */
  Tags?: Tag[];

  /**
   * <p>One or more VPC security group IDs to associate with the new proxy.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>One or more VPC subnet IDs to associate with the new proxy.</p>
   */
  VpcSubnetIds: string[] | undefined;
}

export namespace CreateDBProxyRequest {
  export const filterSensitiveLog = (obj: CreateDBProxyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBProxyRequest =>
    __isa(o, "CreateDBProxyRequest");
}

export interface CreateDBProxyResponse {
  __type?: "CreateDBProxyResponse";
  /**
   * <p>The <code>DBProxy</code> structure corresponding to the new proxy.</p>
   */
  DBProxy?: DBProxy;
}

export namespace CreateDBProxyResponse {
  export const filterSensitiveLog = (obj: CreateDBProxyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBProxyResponse =>
    __isa(o, "CreateDBProxyResponse");
}

/**
 * <p></p>
 */
export interface CreateDBSecurityGroupMessage {
  __type?: "CreateDBSecurityGroupMessage";
  /**
   * <p>The description for the DB security group.</p>
   */
  DBSecurityGroupDescription: string | undefined;

  /**
   * <p>The name for the DB security group. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must not be "Default"</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mysecuritygroup</code>
   *          </p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>Tags to assign to the DB security group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateDBSecurityGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateDBSecurityGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSecurityGroupMessage =>
    __isa(o, "CreateDBSecurityGroupMessage");
}

export interface CreateDBSecurityGroupResult {
  __type?: "CreateDBSecurityGroupResult";
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace CreateDBSecurityGroupResult {
  export const filterSensitiveLog = (
    obj: CreateDBSecurityGroupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSecurityGroupResult =>
    __isa(o, "CreateDBSecurityGroupResult");
}

export interface CreateDBSnapshotMessage {
  __type?: "CreateDBSnapshotMessage";
  DBInstanceIdentifier: string | undefined;
  DBSnapshotIdentifier: string | undefined;
  Tags?: Tag[];
}

export namespace CreateDBSnapshotMessage {
  export const filterSensitiveLog = (obj: CreateDBSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSnapshotMessage =>
    __isa(o, "CreateDBSnapshotMessage");
}

export interface CreateDBSnapshotResult {
  __type?: "CreateDBSnapshotResult";
  DBSnapshot?: DBSnapshot;
}

export namespace CreateDBSnapshotResult {
  export const filterSensitiveLog = (obj: CreateDBSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSnapshotResult =>
    __isa(o, "CreateDBSnapshotResult");
}

export interface CreateDBSubnetGroupMessage {
  __type?: "CreateDBSubnetGroupMessage";
  DBSubnetGroupDescription: string | undefined;
  DBSubnetGroupName: string | undefined;
  SubnetIds: string[] | undefined;
  Tags?: Tag[];
}

export namespace CreateDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSubnetGroupMessage =>
    __isa(o, "CreateDBSubnetGroupMessage");
}

export interface CreateDBSubnetGroupResult {
  __type?: "CreateDBSubnetGroupResult";
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace CreateDBSubnetGroupResult {
  export const filterSensitiveLog = (obj: CreateDBSubnetGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDBSubnetGroupResult =>
    __isa(o, "CreateDBSubnetGroupResult");
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  __type?: "CreateEventSubscriptionMessage";
  /**
   * <p>
   *           A value that indicates whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active.
   *       </p>
   */
  Enabled?: boolean;

  /**
   * <p>
   *             A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories
   *             for a given SourceType
   *             in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic
   *             in the <i>Amazon RDS User Guide</i>
   *             or by using the <b>DescribeEventCategories</b> action.
   *         </p>
   */
  EventCategories?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If SourceIds are supplied, SourceType must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p>
   *             </li>
   *          </ul>
   */
  SourceIds?: string[];

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of
   *           events generated by a DB instance, you would set this parameter to db-instance. if this value isn't specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

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

export interface CreateEventSubscriptionResult {
  __type?: "CreateEventSubscriptionResult";
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResult {
  export const filterSensitiveLog = (
    obj: CreateEventSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEventSubscriptionResult =>
    __isa(o, "CreateEventSubscriptionResult");
}

export interface CreateGlobalClusterMessage {
  __type?: "CreateGlobalClusterMessage";
  /**
   * <p>
   *         The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon
   *         Aurora will not create a database in the global database cluster you are creating.
   *       </p>
   */
  DatabaseName?: string;

  /**
   * <p>
   *         The deletion protection setting for the new global database.
   *         The global database can't be deleted when deletion protection is enabled.
   *       </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of the Aurora global database.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The cluster identifier of the new global database cluster.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The Amazon Resource Name (ARN) to use as the primary cluster of the global database.
   *         This parameter is optional.
   *       </p>
   */
  SourceDBClusterIdentifier?: string;

  /**
   * <p>
   *         The storage encryption setting for the new global database cluster.
   *       </p>
   */
  StorageEncrypted?: boolean;
}

export namespace CreateGlobalClusterMessage {
  export const filterSensitiveLog = (obj: CreateGlobalClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGlobalClusterMessage =>
    __isa(o, "CreateGlobalClusterMessage");
}

export interface CreateGlobalClusterResult {
  __type?: "CreateGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace CreateGlobalClusterResult {
  export const filterSensitiveLog = (obj: CreateGlobalClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGlobalClusterResult =>
    __isa(o, "CreateGlobalClusterResult");
}

export interface CreateOptionGroupMessage {
  __type?: "CreateOptionGroupMessage";
  EngineName: string | undefined;
  MajorEngineVersion: string | undefined;
  OptionGroupDescription: string | undefined;
  OptionGroupName: string | undefined;
}

export namespace CreateOptionGroupMessage {
  export const filterSensitiveLog = (obj: CreateOptionGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOptionGroupMessage =>
    __isa(o, "CreateOptionGroupMessage");
}

export interface CreateOptionGroupResult {
  __type?: "CreateOptionGroupResult";
  OptionGroup?: OptionGroup;
}

export namespace CreateOptionGroupResult {
  export const filterSensitiveLog = (obj: CreateOptionGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOptionGroupResult =>
    __isa(o, "CreateOptionGroupResult");
}

/**
 * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 <i>RDS on VMware User Guide.</i>
 *             </a>
 *          </p>
 */
export interface CustomAvailabilityZone {
  __type?: "CustomAvailabilityZone";
  /**
   * <p>The identifier of the custom AZ.</p>
   *         <p>Amazon RDS generates a unique identifier when a custom AZ is created.</p>
   */
  CustomAvailabilityZoneId?: string;

  /**
   * <p>The name of the custom AZ.</p>
   */
  CustomAvailabilityZoneName?: string;

  /**
   * <p>The status of the custom AZ.</p>
   */
  CustomAvailabilityZoneStatus?: string;

  /**
   * <p>Information about the virtual private network (VPN) between the VMware vSphere cluster
   *             and the AWS website.</p>
   */
  VpnDetails?: VpnDetails;
}

export namespace CustomAvailabilityZone {
  export const filterSensitiveLog = (obj: CustomAvailabilityZone): any => ({
    ...obj,
    ...(obj.VpnDetails && {
      VpnDetails: VpnDetails.filterSensitiveLog(obj.VpnDetails)
    })
  });
  export const isa = (o: any): o is CustomAvailabilityZone =>
    __isa(o, "CustomAvailabilityZone");
}

/**
 * <p>
 *             <code>CustomAvailabilityZoneName</code> is already used by an existing custom
 *             Availability Zone.</p>
 */
export interface CustomAvailabilityZoneAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomAvailabilityZoneAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace CustomAvailabilityZoneAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: CustomAvailabilityZoneAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomAvailabilityZoneAlreadyExistsFault =>
    __isa(o, "CustomAvailabilityZoneAlreadyExistsFault");
}

export interface CustomAvailabilityZoneMessage {
  __type?: "CustomAvailabilityZoneMessage";
  /**
   * <p>The list of <a>CustomAvailabilityZone</a> objects for the AWS account.</p>
   */
  CustomAvailabilityZones?: CustomAvailabilityZone[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeCustomAvailabilityZones</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace CustomAvailabilityZoneMessage {
  export const filterSensitiveLog = (
    obj: CustomAvailabilityZoneMessage
  ): any => ({
    ...obj,
    ...(obj.CustomAvailabilityZones && {
      CustomAvailabilityZones: obj.CustomAvailabilityZones.map(item =>
        CustomAvailabilityZone.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is CustomAvailabilityZoneMessage =>
    __isa(o, "CustomAvailabilityZoneMessage");
}

/**
 * <p>
 *             <code>CustomAvailabilityZoneId</code> doesn't refer to an existing custom
 *             Availability Zone identifier.</p>
 */
export interface CustomAvailabilityZoneNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomAvailabilityZoneNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CustomAvailabilityZoneNotFoundFault {
  export const filterSensitiveLog = (
    obj: CustomAvailabilityZoneNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomAvailabilityZoneNotFoundFault =>
    __isa(o, "CustomAvailabilityZoneNotFoundFault");
}

/**
 * <p>You have exceeded the maximum number of custom Availability Zones.</p>
 */
export interface CustomAvailabilityZoneQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomAvailabilityZoneQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace CustomAvailabilityZoneQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: CustomAvailabilityZoneQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomAvailabilityZoneQuotaExceededFault =>
    __isa(o, "CustomAvailabilityZoneQuotaExceededFault");
}

/**
 * <p>Contains the details of an Amazon Aurora DB cluster.
 *       </p>
 *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
 *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
 *       </p>
 */
export interface DBCluster {
  __type?: "DBCluster";
  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  ActivityStreamKinesisStreamName?: string;

  /**
   * <p>The AWS KMS key identifier used for encrypting messages in the database activity stream.</p>
   */
  ActivityStreamKmsKeyId?: string;

  /**
   * <p>The mode of the database activity stream.
   *            Database events such as a change or access generate an activity stream event.
   *            The database session can handle these events either synchronously or asynchronously.
   *        </p>
   */
  ActivityStreamMode?: ActivityStreamMode | string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  ActivityStreamStatus?: ActivityStreamStatus | string;

  /**
   * <p>For all database engines except Amazon Aurora, <code>AllocatedStorage</code> specifies the allocated storage size in gibibytes (GiB).
   *           For Aurora, <code>AllocatedStorage</code> always returns 1, because Aurora DB cluster storage size isn't fixed, but instead automatically
   *       adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.
   *           IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services
   *           on your behalf.</p>
   */
  AssociatedRoles?: DBClusterRole[];

  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of change records stored for Backtrack.</p>
   */
  BacktrackConsumedChangeRecords?: number;

  /**
   * <p>The target backtrack window, in seconds. If this value is set to 0, backtracking is
   *             disabled for the DB cluster. Otherwise, backtracking is enabled.</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The current capacity of an Aurora Serverless DB cluster. The capacity is 0 (zero)
   *           when the cluster is paused.</p>
   *          <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   */
  Capacity?: number;

  /**
   * <p>If present, specifies the name of the character set that this cluster is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Specifies whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specifies whether the DB cluster is a clone of a DB cluster owned by a different AWS account.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * <p>Identifies all custom endpoints associated with the cluster.</p>
   */
  CustomEndpoints?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: DBClusterMember[];

  /**
   * <p>Provides the list of option group memberships for this DB cluster.</p>
   */
  DBClusterOptionGroupMemberships?: DBClusterOptionGroupStatus[];

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>Indicates if the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The earliest time to which a DB cluster can be backtracked.</p>
   */
  EarliestBacktrackTime?: Date;

  /**
   * <p>The earliest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p>
   *         <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   */
  EngineMode?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>A value that indicates whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p>
   *          <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *           SQL queries on the Aurora Serverless DB cluster. You can also query your database
   *           from inside the RDS console with the query editor.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * <p>A value that indicates whether the mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is enabled, the AWS KMS key identifier for the encrypted DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Contains the master username for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the daily time range during which automated backups are
   *             created if automated backups are enabled, as determined
   *             by the <code>BackupRetentionPeriod</code>.
   *         </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: string[];

  /**
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances
   *             connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections
   *             to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster.
   *             This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster. </p>
   *         <p>If a failover occurs, and the Aurora Replica that you are connected to is promoted
   *             to be the primary instance, your connection is dropped. To
   *             continue sending your read workload to other Aurora Replicas in the cluster,
   *             you can then reconnect to the reader endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>Contains the identifier of the source DB cluster if this DB cluster is a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ScalingConfigurationInfo?: ScalingConfigurationInfo;

  /**
   * <p>Specifies the current state of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Provides a list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
}

export namespace DBCluster {
  export const filterSensitiveLog = (obj: DBCluster): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBCluster => __isa(o, "DBCluster");
}

/**
 * <p>The user already has a DB cluster with the given identifier.</p>
 */
export interface DBClusterAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBClusterAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterAlreadyExistsFault =>
    __isa(o, "DBClusterAlreadyExistsFault");
}

/**
 * <p>This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface DBClusterBacktrack {
  __type?: "DBClusterBacktrack";
  /**
   * <p>Contains the backtrack identifier.</p>
   */
  BacktrackIdentifier?: string;

  /**
   * <p>The timestamp of the time at which the backtrack was requested.</p>
   */
  BacktrackRequestCreationTime?: Date;

  /**
   * <p>The timestamp of the time to which the DB cluster was backtracked.</p>
   */
  BacktrackTo?: Date;

  /**
   * <p>The timestamp of the time from which the DB cluster was backtracked.</p>
   */
  BacktrackedFrom?: Date;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The status of the backtrack. This property returns one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>applying</code> - The backtrack is currently being applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>completed</code> - The backtrack has successfully been applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - An error occurred while the backtrack was applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The backtrack is currently pending application to or rollback from the DB cluster.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterBacktrack {
  export const filterSensitiveLog = (obj: DBClusterBacktrack): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterBacktrack =>
    __isa(o, "DBClusterBacktrack");
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface DBClusterBacktrackMessage {
  __type?: "DBClusterBacktrackMessage";
  /**
   * <p>Contains a list of backtracks for the user.</p>
   */
  DBClusterBacktracks?: DBClusterBacktrack[];

  /**
   * <p>A pagination token that can be used in a subsequent <code>DescribeDBClusterBacktracks</code> request.</p>
   */
  Marker?: string;
}

export namespace DBClusterBacktrackMessage {
  export const filterSensitiveLog = (obj: DBClusterBacktrackMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterBacktrackMessage =>
    __isa(o, "DBClusterBacktrackMessage");
}

/**
 * <p>
 *             <code>BacktrackIdentifier</code> doesn't refer to an existing backtrack. </p>
 */
export interface DBClusterBacktrackNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterBacktrackNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterBacktrackNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBClusterBacktrackNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterBacktrackNotFoundFault =>
    __isa(o, "DBClusterBacktrackNotFoundFault");
}

export interface DBClusterCapacityInfo {
  __type?: "DBClusterCapacityInfo";
  /**
   * <p>The current capacity of the DB cluster.</p>
   */
  CurrentCapacity?: number;

  /**
   * <p>A user-supplied DB cluster identifier. This identifier is the unique key that
   *             identifies a DB cluster. </p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A value that specifies the capacity that the DB cluster scales to next.</p>
   */
  PendingCapacity?: number;

  /**
   * <p>The number of seconds before a call to <code>ModifyCurrentDBClusterCapacity</code> times out.</p>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either
   *             <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   */
  TimeoutAction?: string;
}

export namespace DBClusterCapacityInfo {
  export const filterSensitiveLog = (obj: DBClusterCapacityInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterCapacityInfo =>
    __isa(o, "DBClusterCapacityInfo");
}

/**
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster.
 *       This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBClusterEndpoints</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For the data structure that represents Amazon RDS DB instance endpoints,
 *         see <code>Endpoint</code>.</p>
 */
export interface DBClusterEndpoint {
  __type?: "DBClusterEndpoint";
  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *        <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;

  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>modifying</code>.</p>
   */
  Status?: string;
}

export namespace DBClusterEndpoint {
  export const filterSensitiveLog = (obj: DBClusterEndpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterEndpoint =>
    __isa(o, "DBClusterEndpoint");
}

/**
 * <p>The specified custom endpoint can't be created because it already exists.</p>
 */
export interface DBClusterEndpointAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterEndpointAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterEndpointAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBClusterEndpointAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterEndpointAlreadyExistsFault =>
    __isa(o, "DBClusterEndpointAlreadyExistsFault");
}

export interface DBClusterEndpointMessage {
  __type?: "DBClusterEndpointMessage";
  /**
   * <p>Contains the details of the endpoints associated with the cluster
   *        and matching any filter conditions.</p>
   */
  DBClusterEndpoints?: DBClusterEndpoint[];

  /**
   * <p> An optional pagination token provided by a previous
   *             <code>DescribeDBClusterEndpoints</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBClusterEndpointMessage {
  export const filterSensitiveLog = (obj: DBClusterEndpointMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterEndpointMessage =>
    __isa(o, "DBClusterEndpointMessage");
}

/**
 * <p>The specified custom endpoint doesn't exist.</p>
 */
export interface DBClusterEndpointNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterEndpointNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterEndpointNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBClusterEndpointNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterEndpointNotFoundFault =>
    __isa(o, "DBClusterEndpointNotFoundFault");
}

/**
 * <p>The cluster already has the maximum number of custom endpoints.</p>
 */
export interface DBClusterEndpointQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterEndpointQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterEndpointQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBClusterEndpointQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterEndpointQuotaExceededFault =>
    __isa(o, "DBClusterEndpointQuotaExceededFault");
}

/**
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 */
export interface DBClusterMember {
  __type?: "DBClusterMember";
  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.
   *     </p>
   */
  PromotionTier?: number;
}

export namespace DBClusterMember {
  export const filterSensitiveLog = (obj: DBClusterMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterMember =>
    __isa(o, "DBClusterMember");
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.</p>
 */
export interface DBClusterMessage {
  __type?: "DBClusterMessage";
  /**
   * <p>Contains a list of DB clusters for the user.</p>
   */
  DBClusters?: DBCluster[];

  /**
   * <p>A pagination token that can be used in a subsequent DescribeDBClusters request.</p>
   */
  Marker?: string;
}

export namespace DBClusterMessage {
  export const filterSensitiveLog = (obj: DBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterMessage =>
    __isa(o, "DBClusterMessage");
}

/**
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.
 *         </p>
 */
export interface DBClusterNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterNotFoundFault {
  export const filterSensitiveLog = (obj: DBClusterNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterNotFoundFault =>
    __isa(o, "DBClusterNotFoundFault");
}

/**
 * <p>Contains status information for a DB cluster option group.</p>
 */
export interface DBClusterOptionGroupStatus {
  __type?: "DBClusterOptionGroupStatus";
  /**
   * <p>Specifies the name of the DB cluster option group.</p>
   */
  DBClusterOptionGroupName?: string;

  /**
   * <p>Specifies the status of the DB cluster option group.</p>
   */
  Status?: string;
}

export namespace DBClusterOptionGroupStatus {
  export const filterSensitiveLog = (obj: DBClusterOptionGroupStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterOptionGroupStatus =>
    __isa(o, "DBClusterOptionGroupStatus");
}

/**
 * <p>Contains the details of an Amazon RDS DB cluster parameter group.
 *         </p>
 *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.
 *         </p>
 */
export interface DBClusterParameterGroup {
  __type?: "DBClusterParameterGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;

  /**
   * <p>Provides the name of the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this DB cluster parameter group.</p>
   */
  Description?: string;
}

export namespace DBClusterParameterGroup {
  export const filterSensitiveLog = (obj: DBClusterParameterGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroup =>
    __isa(o, "DBClusterParameterGroup");
}

/**
 * <p>Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.</p>
 */
export interface DBClusterParameterGroupDetails {
  __type?: "DBClusterParameterGroupDetails";
  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeDBClusterParameters request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   */
  Parameters?: Parameter[];
}

export namespace DBClusterParameterGroupDetails {
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupDetails =>
    __isa(o, "DBClusterParameterGroupDetails");
}

/**
 * <p></p>
 */
export interface DBClusterParameterGroupNameMessage {
  __type?: "DBClusterParameterGroupNameMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   */
  DBClusterParameterGroupName?: string;
}

export namespace DBClusterParameterGroupNameMessage {
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupNameMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupNameMessage =>
    __isa(o, "DBClusterParameterGroupNameMessage");
}

/**
 * <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB
 *             cluster parameter group. </p>
 */
export interface DBClusterParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterParameterGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupNotFoundFault =>
    __isa(o, "DBClusterParameterGroupNotFoundFault");
}

/**
 * <p></p>
 */
export interface DBClusterParameterGroupsMessage {
  __type?: "DBClusterParameterGroupsMessage";
  /**
   * <p>A list of DB cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: DBClusterParameterGroup[];

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribeDBClusterParameterGroups</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBClusterParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: DBClusterParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterParameterGroupsMessage =>
    __isa(o, "DBClusterParameterGroupsMessage");
}

/**
 * <p>The user attempted to create a new DB cluster and the user has already reached the
 *             maximum allowed DB cluster quota.</p>
 */
export interface DBClusterQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBClusterQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterQuotaExceededFault =>
    __isa(o, "DBClusterQuotaExceededFault");
}

/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.</p>
 */
export interface DBClusterRole {
  __type?: "DBClusterRole";
  /**
   * <p>The name of the feature associated with the AWS Identity and Access Management (IAM) role.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.
   *         </p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following
   *         values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be used to
   *             access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable
   *                 to assume the IAM role in order to access other AWS services on your behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterRole {
  export const filterSensitiveLog = (obj: DBClusterRole): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterRole => __isa(o, "DBClusterRole");
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterRoleAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterRoleAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBClusterRoleAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterRoleAlreadyExistsFault =>
    __isa(o, "DBClusterRoleAlreadyExistsFault");
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterRoleNotFoundFault {
  export const filterSensitiveLog = (obj: DBClusterRoleNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterRoleNotFoundFault =>
    __isa(o, "DBClusterRoleNotFoundFault");
}

/**
 * <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterRoleQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterRoleQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBClusterRoleQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterRoleQuotaExceededFault =>
    __isa(o, "DBClusterRoleQuotaExceededFault");
}

/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot
 *       </p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBClusterSnapshots</code> action.
 *       </p>
 */
export interface DBClusterSnapshot {
  __type?: "DBClusterSnapshot";
  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * <p>Specifies the identifier for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>Provides the version of the database engine for this DB cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Provides the license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Provides the master username for the DB cluster snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Specifies the port that the DB cluster was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Provides the type of the DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon
   *             Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;

  /**
   * <p>Specifies the status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies whether the DB cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Provides the VPC ID associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;
}

export namespace DBClusterSnapshot {
  export const filterSensitiveLog = (obj: DBClusterSnapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshot =>
    __isa(o, "DBClusterSnapshot");
}

/**
 * <p>The user already has a DB cluster snapshot with the given identifier.</p>
 */
export interface DBClusterSnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBClusterSnapshotAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotAlreadyExistsFault =>
    __isa(o, "DBClusterSnapshotAlreadyExistsFault");
}

/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p>
 *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
 *             to restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
 *             API action.</p>
 */
export interface DBClusterSnapshotAttribute {
  __type?: "DBClusterSnapshotAttribute";
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *         <p>The attribute named <code>restore</code> refers to the list of AWS accounts that
   *             have permission to copy or restore the manual DB cluster snapshot. For more information,
   *             see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p>
   *         <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *             returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual
   *             DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster snapshot
   *             is public and available for any AWS account to copy or restore.</p>
   */
  AttributeValues?: string[];
}

export namespace DBClusterSnapshotAttribute {
  export const filterSensitiveLog = (obj: DBClusterSnapshotAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotAttribute =>
    __isa(o, "DBClusterSnapshotAttribute");
}

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
 *             API action.</p>
 *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
 *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
 *             API action.</p>
 */
export interface DBClusterSnapshotAttributesResult {
  __type?: "DBClusterSnapshotAttributesResult";
  /**
   * <p>The list of attributes and values for the manual DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: DBClusterSnapshotAttribute[];

  /**
   * <p>The identifier of the manual DB cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;
}

export namespace DBClusterSnapshotAttributesResult {
  export const filterSensitiveLog = (
    obj: DBClusterSnapshotAttributesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotAttributesResult =>
    __isa(o, "DBClusterSnapshotAttributesResult");
}

/**
 * <p>
 *           Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action.
 *     </p>
 */
export interface DBClusterSnapshotMessage {
  __type?: "DBClusterSnapshotMessage";
  /**
   * <p>Provides a list of DB cluster snapshots for the user.</p>
   */
  DBClusterSnapshots?: DBClusterSnapshot[];

  /**
   * <p>
   *       An optional pagination token provided by a previous
   *           <code>DescribeDBClusterSnapshots</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;
}

export namespace DBClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: DBClusterSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotMessage =>
    __isa(o, "DBClusterSnapshotMessage");
}

/**
 * <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.
 *         </p>
 */
export interface DBClusterSnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBClusterSnapshotNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBClusterSnapshotNotFoundFault =>
    __isa(o, "DBClusterSnapshotNotFoundFault");
}

/**
 * <p>
 *             This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
 *         </p>
 */
export interface DBEngineVersion {
  __type?: "DBEngineVersion";
  /**
   * <p>The description of the database engine.</p>
   */
  DBEngineDescription?: string;

  /**
   * <p>The description of the database engine version.</p>
   */
  DBEngineVersionDescription?: string;

  /**
   * <p>The name of the DB parameter group family for the database engine.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>
   *             The default character set for new instances of this engine version,
   *             if the <code>CharacterSetName</code> parameter of the CreateDBInstance API
   *             isn't specified.
   *         </p>
   */
  DefaultCharacterSet?: CharacterSet;

  /**
   * <p>The name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch Logs.</p>
   */
  ExportableLogTypes?: string[];

  /**
   * <p>The status of the DB engine version, either <code>available</code> or <code>deprecated</code>.</p>
   */
  Status?: string;

  /**
   * <p>
   *             A list of the character sets supported by this engine for the
   *             <code>CharacterSetName</code> parameter of the <code>CreateDBInstance</code> action.
   *         </p>
   */
  SupportedCharacterSets?: CharacterSet[];

  /**
   * <p>A list of the supported DB engine modes.</p>
   */
  SupportedEngineModes?: string[];

  /**
   * <p>
   *         A list of features supported by the DB engine. Supported feature names include the following.
   *     </p>
   *          <ul>
   *             <li>
   *                <p>s3Import</p>
   *             </li>
   *          </ul>
   */
  SupportedFeatureNames?: string[];

  /**
   * <p>A list of the time zones supported by this engine for the
   *             <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action.
   *         </p>
   */
  SupportedTimezones?: Timezone[];

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * <p>Indicates whether the database engine version supports Read Replicas.</p>
   */
  SupportsReadReplica?: boolean;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: UpgradeTarget[];
}

export namespace DBEngineVersion {
  export const filterSensitiveLog = (obj: DBEngineVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBEngineVersion =>
    __isa(o, "DBEngineVersion");
}

export interface DBEngineVersionMessage {
  __type?: "DBEngineVersionMessage";
  DBEngineVersions?: DBEngineVersion[];
  Marker?: string;
}

export namespace DBEngineVersionMessage {
  export const filterSensitiveLog = (obj: DBEngineVersionMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBEngineVersionMessage =>
    __isa(o, "DBEngineVersionMessage");
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.
 *       </p>
 *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
 *       </p>
 */
export interface DBInstance {
  __type?: "DBInstance";
  /**
   * <p>Specifies the allocated storage size specified in gibibytes.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>
   *             The AWS Identity and Access Management (IAM) roles associated with the DB instance.
   *         </p>
   */
  AssociatedRoles?: DBInstanceRole[];

  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>If present, specifies the name of the character set that this instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB instance.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *             value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *             information, see <code>DBCluster</code>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.</p>
   *          <p>Type: String</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters do not apply to an Oracle DB instance.</p>
   */
  DBName?: string;

  /**
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   */
  DBParameterGroups?: DBParameterGroupStatus[];

  /**
   * <p>
   *         A list of DB security group elements containing
   *         <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.
   *         </p>
   */
  DBSecurityGroups?: DBSecurityGroupMembership[];

  /**
   * <p>Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>Indicates if the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The Active Directory Domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: DomainMembership[];

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   *         <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnabledCloudwatchLogsExports?: string[];

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>Provides the name of the database engine to be used for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   *
   *          <p>IAM database authentication can be enabled for the following database engines</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher. To enable IAM database authentication for Aurora, see DBCluster Type.</p>
   *             </li>
   *          </ul>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>
   */
  Iops?: number;

  /**
   * <p>
   *             If <code>StorageEncrypted</code> is true, the AWS KMS key identifier
   *             for the encrypted DB instance.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the listener connection endpoint for SQL Server Always On.</p>
   */
  ListenerEndpoint?: Endpoint;

  /**
   * <p>Contains the master username for the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Provides the list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: OptionGroupMembership[];

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>True if Performance Insights is enabled for the DB instance, and otherwise false.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID
   *             is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS
   *             encryption key.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>
   *         Specifies the daily time range during which automated backups are
   *         created if automated backups are enabled, as determined
   *         by the <code>BackupRetentionPeriod</code>.
   *         </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.
   *     </p>
   */
  PromotionTier?: number;

  /**
   * <p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Contains one or more identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a Read Replica.
   *             For example, when you create an Aurora Read Replica of an RDS MySQL DB instance, the Aurora MySQL DB cluster for the
   *             Aurora Read Replica is shown. This output does not contain information about cross region Aurora Read Replicas.</p>
   *         <note>
   *             <p>Currently, each RDS DB instance can have only one Aurora Read Replica.</p>
   *         </note>
   */
  ReadReplicaDBClusterIdentifiers?: string[];

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: string[];

  /**
   * <p>Contains the identifier of the source DB instance if this DB instance is a Read Replica.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The status of a Read Replica. If the instance isn't a Read Replica, this is blank.</p>
   */
  StatusInfos?: DBInstanceStatusInfo[];

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Specifies the storage type associated with DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The time zone of the DB instance.
   *             In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for
   *             Microsoft SQL Server DB instances
   *             that were created with a time zone specified.
   *         </p>
   */
  Timezone?: string;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
}

export namespace DBInstance {
  export const filterSensitiveLog = (obj: DBInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstance => __isa(o, "DBInstance");
}

/**
 * <p>The user already has a DB instance with the given identifier.</p>
 */
export interface DBInstanceAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBInstanceAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceAlreadyExistsFault =>
    __isa(o, "DBInstanceAlreadyExistsFault");
}

/**
 * <p>An automated backup of a DB instance. It it consists of
 *             system backups, transaction logs, and the database instance properties that
 *             existed at the time you deleted the source instance. </p>
 */
export interface DBInstanceAutomatedBackup {
  __type?: "DBInstanceAutomatedBackup";
  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The Availability Zone that the automated backup was created in. For information on
   *             AWS Regions and Availability Zones, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *                 and Availability Zones</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the automated backup.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>The customer id of the instance that is/was associated with the automated backup.
   *         </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>Specifies whether the automated backup is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The name of the database engine for this automated backup.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the database engine for the automated backup.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled,
   *             and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Provides the date and time that the DB instance was created.
   *         </p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>The IOPS (I/O operations per second) value for the automated backup. </p>
   */
  Iops?: number;

  /**
   * <p>The AWS KMS key ID for an automated backup.
   *             The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>License model information for the automated backup.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The license model of an automated backup.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The option group the automated backup is associated with.
   *             If omitted, the default option group for the engine specified is used.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number that the automated backup used for connections.</p>
   *         <p>Default: Inherits from the source DB instance</p>
   *         <p>Valid Values: <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The AWS Region associated with the automated backup.</p>
   */
  Region?: string;

  /**
   * <p>Earliest and latest time an instance can be restored to.</p>
   */
  RestoreWindow?: RestoreWindow;

  /**
   * <p>Provides a list of status information for an automated backup:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - automated backups for current instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>retained</code> - automated backups for deleted instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creating</code> - automated backups that are waiting
   *                 for the first automated snapshot to be available.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>Specifies the storage type associated with the automated backup.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the automated backup is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The time zone of the automated backup. In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for Microsoft SQL Server DB instances
   *             that were created with a time zone specified.</p>
   */
  Timezone?: string;

  /**
   * <p>Provides the VPC ID associated with the DB instance</p>
   */
  VpcId?: string;
}

export namespace DBInstanceAutomatedBackup {
  export const filterSensitiveLog = (obj: DBInstanceAutomatedBackup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceAutomatedBackup =>
    __isa(o, "DBInstanceAutomatedBackup");
}

/**
 * <p>
 *             Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.
 *         </p>
 */
export interface DBInstanceAutomatedBackupMessage {
  __type?: "DBInstanceAutomatedBackupMessage";
  /**
   * <p>
   *             A list of <code>DBInstanceAutomatedBackup</code> instances.
   *         </p>
   */
  DBInstanceAutomatedBackups?: DBInstanceAutomatedBackup[];

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace DBInstanceAutomatedBackupMessage {
  export const filterSensitiveLog = (
    obj: DBInstanceAutomatedBackupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceAutomatedBackupMessage =>
    __isa(o, "DBInstanceAutomatedBackupMessage");
}

/**
 * <p>No automated backup for this DB instance was found.</p>
 */
export interface DBInstanceAutomatedBackupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceAutomatedBackupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceAutomatedBackupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBInstanceAutomatedBackupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceAutomatedBackupNotFoundFault =>
    __isa(o, "DBInstanceAutomatedBackupNotFoundFault");
}

export interface DBInstanceMessage {
  __type?: "DBInstanceMessage";
  DBInstances?: DBInstance[];
  Marker?: string;
}

export namespace DBInstanceMessage {
  export const filterSensitiveLog = (obj: DBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceMessage =>
    __isa(o, "DBInstanceMessage");
}

/**
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.
 *         </p>
 */
export interface DBInstanceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceNotFoundFault {
  export const filterSensitiveLog = (obj: DBInstanceNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceNotFoundFault =>
    __isa(o, "DBInstanceNotFoundFault");
}

/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB instance.</p>
 */
export interface DBInstanceRole {
  __type?: "DBInstanceRole";
  /**
   * <p>The name of the feature associated with the AWS Identity and Access Management (IAM) role.
   *             For the list of supported feature names, see <code>DBEngineVersion</code>.
   *         </p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *             instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB instance. The Status property returns one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB instance and can be used to
   *                 access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB instance, but the DB instance is unable
   *                 to assume the IAM role in order to access other AWS services on your behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBInstanceRole {
  export const filterSensitiveLog = (obj: DBInstanceRole): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceRole =>
    __isa(o, "DBInstanceRole");
}

/**
 * <p>The specified <code>RoleArn</code> or <code>FeatureName</code> value is already associated with the DB instance.</p>
 */
export interface DBInstanceRoleAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceRoleAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceRoleAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBInstanceRoleAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceRoleAlreadyExistsFault =>
    __isa(o, "DBInstanceRoleAlreadyExistsFault");
}

/**
 * <p>The specified <code>RoleArn</code> value doesn't match the specified feature for
 *             the DB instance.</p>
 */
export interface DBInstanceRoleNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceRoleNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBInstanceRoleNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceRoleNotFoundFault =>
    __isa(o, "DBInstanceRoleNotFoundFault");
}

/**
 * <p>You can't associate any more AWS Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.</p>
 */
export interface DBInstanceRoleQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceRoleQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceRoleQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBInstanceRoleQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceRoleQuotaExceededFault =>
    __isa(o, "DBInstanceRoleQuotaExceededFault");
}

export interface DBInstanceStatusInfo {
  __type?: "DBInstanceStatusInfo";
  Message?: string;
  Normal?: boolean;
  Status?: string;
  StatusType?: string;
}

export namespace DBInstanceStatusInfo {
  export const filterSensitiveLog = (obj: DBInstanceStatusInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBInstanceStatusInfo =>
    __isa(o, "DBInstanceStatusInfo");
}

/**
 * <p>
 *             <code>LogFileName</code> doesn't refer to an existing DB log file.</p>
 */
export interface DBLogFileNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBLogFileNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBLogFileNotFoundFault {
  export const filterSensitiveLog = (obj: DBLogFileNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBLogFileNotFoundFault =>
    __isa(o, "DBLogFileNotFoundFault");
}

export interface DBParameterGroup {
  __type?: "DBParameterGroup";
  DBParameterGroupFamily?: string;
  DBParameterGroupName?: string;
  Description?: string;
}

export namespace DBParameterGroup {
  export const filterSensitiveLog = (obj: DBParameterGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroup =>
    __isa(o, "DBParameterGroup");
}

/**
 * <p>A DB parameter group with the same name exists.</p>
 */
export interface DBParameterGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBParameterGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupAlreadyExistsFault =>
    __isa(o, "DBParameterGroupAlreadyExistsFault");
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action.
 *         </p>
 */
export interface DBParameterGroupDetails {
  __type?: "DBParameterGroupDetails";
  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         A list of <code>Parameter</code> values.
   *         </p>
   */
  Parameters?: Parameter[];
}

export namespace DBParameterGroupDetails {
  export const filterSensitiveLog = (obj: DBParameterGroupDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupDetails =>
    __isa(o, "DBParameterGroupDetails");
}

export interface DBParameterGroupNameMessage {
  __type?: "DBParameterGroupNameMessage";
  DBParameterGroupName?: string;
}

export namespace DBParameterGroupNameMessage {
  export const filterSensitiveLog = (
    obj: DBParameterGroupNameMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupNameMessage =>
    __isa(o, "DBParameterGroupNameMessage");
}

/**
 * <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.
 *         </p>
 */
export interface DBParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBParameterGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupNotFoundFault =>
    __isa(o, "DBParameterGroupNotFoundFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 */
export interface DBParameterGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBParameterGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupQuotaExceededFault =>
    __isa(o, "DBParameterGroupQuotaExceededFault");
}

export interface DBParameterGroupsMessage {
  __type?: "DBParameterGroupsMessage";
  DBParameterGroups?: DBParameterGroup[];
  Marker?: string;
}

export namespace DBParameterGroupsMessage {
  export const filterSensitiveLog = (obj: DBParameterGroupsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupsMessage =>
    __isa(o, "DBParameterGroupsMessage");
}

export interface DBParameterGroupStatus {
  __type?: "DBParameterGroupStatus";
  DBParameterGroupName?: string;
  ParameterApplyStatus?: string;
}

export namespace DBParameterGroupStatus {
  export const filterSensitiveLog = (obj: DBParameterGroupStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBParameterGroupStatus =>
    __isa(o, "DBParameterGroupStatus");
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>The data structure representing a proxy managed by the RDS Proxy.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
 */
export interface DBProxy {
  __type?: "DBProxy";
  /**
   * <p>One or more data structures specifying the authorization mechanism to connect to the associated RDS DB instance
   *         or Aurora DB cluster.</p>
   */
  Auth?: UserAuthConfigInfo[];

  /**
   * <p>The date and time when the proxy was first created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the proxy.</p>
   */
  DBProxyArn?: string;

  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.</p>
   */
  DBProxyName?: string;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The endpoint that you can use to connect to the proxy. You include the endpoint value in the
   *         connection string for a database client application.</p>
   */
  Endpoint?: string;

  /**
   * <p>Currently, this value is always <code>MYSQL</code>. The engine family applies to
   *         both RDS MySQL and Aurora MySQL.</p>
   */
  EngineFamily?: string;

  /**
   * <p>The number of seconds a connection to the proxy can have no activity before the proxy drops the client connection.
   *         The proxy keeps the underlying database connection open and puts it back into the connection pool for reuse by
   *         later connection requests.</p>
   *          <p>Default: 1800 (30 minutes)</p>
   *          <p>Constraints: 1 to 28,800</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>Indicates whether Transport Layer Security (TLS) encryption is required for connections to the proxy.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that the proxy uses to access Amazon Secrets Manager.</p>
   */
  RoleArn?: string;

  /**
   * <p>The current status of this proxy. A status of <code>available</code> means the
   *         proxy is ready to handle requests. Other values indicate that you must wait for
   *         the proxy to be ready, or take some action to resolve an issue.</p>
   */
  Status?: DBProxyStatus | string;

  /**
   * <p>The date and time when the proxy was last updated.</p>
   */
  UpdatedDate?: Date;

  /**
   * <p>Provides a list of VPC security groups that the proxy belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The EC2 subnet IDs for the proxy.</p>
   */
  VpcSubnetIds?: string[];
}

export namespace DBProxy {
  export const filterSensitiveLog = (obj: DBProxy): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxy => __isa(o, "DBProxy");
}

/**
 * <p>The specified proxy name must be unique for all proxies owned by your AWS account in the specified AWS Region.</p>
 */
export interface DBProxyAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyAlreadyExistsFault {
  export const filterSensitiveLog = (obj: DBProxyAlreadyExistsFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyAlreadyExistsFault =>
    __isa(o, "DBProxyAlreadyExistsFault");
}

/**
 * <p>The specified proxy name doesn't correspond to a proxy owned by your AWS accoutn in the specified AWS Region.</p>
 */
export interface DBProxyNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyNotFoundFault {
  export const filterSensitiveLog = (obj: DBProxyNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyNotFoundFault =>
    __isa(o, "DBProxyNotFoundFault");
}

/**
 * <p>Your AWS account already has the maximum number of proxies in the specified AWS Region.</p>
 */
export interface DBProxyQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyQuotaExceededFault {
  export const filterSensitiveLog = (obj: DBProxyQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyQuotaExceededFault =>
    __isa(o, "DBProxyQuotaExceededFault");
}

export enum DBProxyStatus {
  AVAILABLE = "available",
  CREATING = "creating",
  DELETING = "deleting",
  INCOMPATIBLE_NETWORK = "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS = "insufficient-resource-limits",
  MODIFYING = "modifying"
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster
 *         that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
 */
export interface DBProxyTarget {
  __type?: "DBProxyTarget";
  /**
   * <p>The writer endpoint for the RDS DB instance or Aurora DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The port that the RDS Proxy uses to connect to the target RDS DB instance or Aurora DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The identifier representing the target. It can be the instance identifier for an RDS DB instance,
   *         or the cluster identifier for an Aurora DB cluster.</p>
   */
  RdsResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the RDS DB instance or Aurora DB cluster.</p>
   */
  TargetArn?: string;

  /**
   * <p>The DB cluster identifier when the target represents an Aurora DB cluster. This field is blank when the target represents an RDS DB instance.</p>
   */
  TrackedClusterId?: string;

  /**
   * <p>Specifies the kind of database, such as an RDS DB instance or an Aurora DB cluster, that the target represents.</p>
   */
  Type?: TargetType | string;
}

export namespace DBProxyTarget {
  export const filterSensitiveLog = (obj: DBProxyTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyTarget => __isa(o, "DBProxyTarget");
}

/**
 * <p>The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.</p>
 */
export interface DBProxyTargetAlreadyRegisteredFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyTargetAlreadyRegisteredFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyTargetAlreadyRegisteredFault {
  export const filterSensitiveLog = (
    obj: DBProxyTargetAlreadyRegisteredFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyTargetAlreadyRegisteredFault =>
    __isa(o, "DBProxyTargetAlreadyRegisteredFault");
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group
 *         is associated with exactly one RDS DB instance or Aurora DB cluster.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
 */
export interface DBProxyTargetGroup {
  __type?: "DBProxyTargetGroup";
  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   */
  ConnectionPoolConfig?: ConnectionPoolConfigurationInfo;

  /**
   * <p>The date and time when the target group was first created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the RDS proxy associated with this target group.</p>
   */
  DBProxyName?: string;

  /**
   * <p>Whether this target group is the first one used for connection requests by the associated proxy.
   *         Because each proxy is currently associated with a single target group, currently this setting
   *         is always <code>true</code>.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The current status of this target group. A status of <code>available</code> means the
   *         target group is correctly associated with a database. Other values indicate that you must wait for
   *         the target group to be ready, or take some action to resolve an issue.</p>
   */
  Status?: string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the target group.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The identifier for the target group. This name must be unique for all target groups owned by your AWS account in the specified AWS Region.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>The date and time when the target group was last updated.</p>
   */
  UpdatedDate?: Date;
}

export namespace DBProxyTargetGroup {
  export const filterSensitiveLog = (obj: DBProxyTargetGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyTargetGroup =>
    __isa(o, "DBProxyTargetGroup");
}

/**
 * <p>The specified target group isn't available for a proxy owned by your AWS account in the specified AWS Region.</p>
 */
export interface DBProxyTargetGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyTargetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyTargetGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBProxyTargetGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyTargetGroupNotFoundFault =>
    __isa(o, "DBProxyTargetGroupNotFoundFault");
}

/**
 * <p>The specified RDS DB instance or Aurora DB cluster isn't available for a proxy owned by your AWS account in the specified AWS Region.</p>
 */
export interface DBProxyTargetNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyTargetNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyTargetNotFoundFault {
  export const filterSensitiveLog = (obj: DBProxyTargetNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBProxyTargetNotFoundFault =>
    __isa(o, "DBProxyTargetNotFoundFault");
}

export interface DBSecurityGroup {
  __type?: "DBSecurityGroup";
  DBSecurityGroupDescription?: string;
  DBSecurityGroupName?: string;
  EC2SecurityGroups?: EC2SecurityGroup[];
  IPRanges?: IPRange[];
  OwnerId?: string;
  VpcId?: string;
}

export namespace DBSecurityGroup {
  export const filterSensitiveLog = (obj: DBSecurityGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroup =>
    __isa(o, "DBSecurityGroup");
}

/**
 * <p>
 *         A DB security group with the name specified in
 *         <code>DBSecurityGroupName</code> already exists.
 *         </p>
 */
export interface DBSecurityGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBSecurityGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroupAlreadyExistsFault =>
    __isa(o, "DBSecurityGroupAlreadyExistsFault");
}

/**
 * <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RebootDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface DBSecurityGroupMembership {
  __type?: "DBSecurityGroupMembership";
  /**
   * <p>The name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>The status of the DB security group.</p>
   */
  Status?: string;
}

export namespace DBSecurityGroupMembership {
  export const filterSensitiveLog = (obj: DBSecurityGroupMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroupMembership =>
    __isa(o, "DBSecurityGroupMembership");
}

export interface DBSecurityGroupMessage {
  __type?: "DBSecurityGroupMessage";
  DBSecurityGroups?: DBSecurityGroup[];
  Marker?: string;
}

export namespace DBSecurityGroupMessage {
  export const filterSensitiveLog = (obj: DBSecurityGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroupMessage =>
    __isa(o, "DBSecurityGroupMessage");
}

/**
 * <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.
 *         </p>
 */
export interface DBSecurityGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupNotFoundFault {
  export const filterSensitiveLog = (
    obj: DBSecurityGroupNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroupNotFoundFault =>
    __isa(o, "DBSecurityGroupNotFoundFault");
}

/**
 * <p>A DB security group isn't allowed for this action.</p>
 */
export interface DBSecurityGroupNotSupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupNotSupportedFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupNotSupportedFault {
  export const filterSensitiveLog = (
    obj: DBSecurityGroupNotSupportedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroupNotSupportedFault =>
    __isa(o, "DBSecurityGroupNotSupportedFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB security
 *             groups.</p>
 */
export interface DBSecurityGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBSecurityGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSecurityGroupQuotaExceededFault =>
    __isa(o, "DBSecurityGroupQuotaExceededFault");
}

export interface DBSnapshot {
  __type?: "DBSnapshot";
  AllocatedStorage?: number;
  AvailabilityZone?: string;
  DBInstanceIdentifier?: string;
  DBSnapshotIdentifier?: string;
  Engine?: string;
  EngineVersion?: string;
  InstanceCreateTime?: Date;
  Iops?: number;
  LicenseModel?: string;
  MasterUsername?: string;
  Port?: number;
  SnapshotCreateTime?: Date;
  SnapshotType?: string;
  Status?: string;
  VpcId?: string;
}

export namespace DBSnapshot {
  export const filterSensitiveLog = (obj: DBSnapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshot => __isa(o, "DBSnapshot");
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> is already used by an existing snapshot.
 *         </p>
 */
export interface DBSnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBSnapshotAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshotAlreadyExistsFault =>
    __isa(o, "DBSnapshotAlreadyExistsFault");
}

/**
 * <p>Contains the name and values of a manual DB snapshot attribute</p>
 *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
 *     to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *     API.</p>
 */
export interface DBSnapshotAttribute {
  __type?: "DBSnapshotAttribute";
  /**
   * <p>The name of the manual DB snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of AWS accounts that
   *           have permission to copy or restore the manual DB cluster snapshot. For more information,
   *           see the <code>ModifyDBSnapshotAttribute</code>
   *           API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value or values for the manual DB snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual
   *       DB snapshot. If a value of <code>all</code> is in the list, then the manual DB snapshot
   *       is public and available for any AWS account to copy or restore.</p>
   */
  AttributeValues?: string[];
}

export namespace DBSnapshotAttribute {
  export const filterSensitiveLog = (obj: DBSnapshotAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshotAttribute =>
    __isa(o, "DBSnapshotAttribute");
}

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
 *     API action.</p>
 *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
 *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *       API action.</p>
 */
export interface DBSnapshotAttributesResult {
  __type?: "DBSnapshotAttributesResult";
  /**
   * <p>The list of attributes and values for the manual DB snapshot.</p>
   */
  DBSnapshotAttributes?: DBSnapshotAttribute[];

  /**
   * <p>The identifier of the manual DB snapshot that the attributes apply to.</p>
   */
  DBSnapshotIdentifier?: string;
}

export namespace DBSnapshotAttributesResult {
  export const filterSensitiveLog = (obj: DBSnapshotAttributesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshotAttributesResult =>
    __isa(o, "DBSnapshotAttributesResult");
}

export interface DBSnapshotMessage {
  __type?: "DBSnapshotMessage";
  DBSnapshots?: DBSnapshot[];
  Marker?: string;
}

export namespace DBSnapshotMessage {
  export const filterSensitiveLog = (obj: DBSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshotMessage =>
    __isa(o, "DBSnapshotMessage");
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.
 *         </p>
 */
export interface DBSnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotNotFoundFault {
  export const filterSensitiveLog = (obj: DBSnapshotNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSnapshotNotFoundFault =>
    __isa(o, "DBSnapshotNotFoundFault");
}

export interface DBSubnetGroup {
  __type?: "DBSubnetGroup";
  DBSubnetGroupDescription?: string;
  DBSubnetGroupName?: string;
  SubnetGroupStatus?: string;
  Subnets?: Subnet[];
  VpcId?: string;
}

export namespace DBSubnetGroup {
  export const filterSensitiveLog = (obj: DBSubnetGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroup => __isa(o, "DBSubnetGroup");
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> is already used by an existing DB subnet group.
 *         </p>
 */
export interface DBSubnetGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: DBSubnetGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupAlreadyExistsFault =>
    __isa(o, "DBSubnetGroupAlreadyExistsFault");
}

/**
 * <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 */
export interface DBSubnetGroupDoesNotCoverEnoughAZs
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupDoesNotCoverEnoughAZs {
  export const filterSensitiveLog = (
    obj: DBSubnetGroupDoesNotCoverEnoughAZs
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupDoesNotCoverEnoughAZs =>
    __isa(o, "DBSubnetGroupDoesNotCoverEnoughAZs");
}

export interface DBSubnetGroupMessage {
  __type?: "DBSubnetGroupMessage";
  DBSubnetGroups?: DBSubnetGroup[];
  Marker?: string;
}

export namespace DBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: DBSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupMessage =>
    __isa(o, "DBSubnetGroupMessage");
}

/**
 * <p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie
 *             in the same region as the source instance.</p>
 */
export interface DBSubnetGroupNotAllowedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupNotAllowedFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupNotAllowedFault {
  export const filterSensitiveLog = (
    obj: DBSubnetGroupNotAllowedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupNotAllowedFault =>
    __isa(o, "DBSubnetGroupNotAllowedFault");
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.
 *         </p>
 */
export interface DBSubnetGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupNotFoundFault {
  export const filterSensitiveLog = (obj: DBSubnetGroupNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupNotFoundFault =>
    __isa(o, "DBSubnetGroupNotFoundFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB subnet
 *             groups.</p>
 */
export interface DBSubnetGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: DBSubnetGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetGroupQuotaExceededFault =>
    __isa(o, "DBSubnetGroupQuotaExceededFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 */
export interface DBSubnetQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetQuotaExceededFault {
  export const filterSensitiveLog = (obj: DBSubnetQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBSubnetQuotaExceededFault =>
    __isa(o, "DBSubnetQuotaExceededFault");
}

/**
 * <p>The DB upgrade failed because a resource the DB depends on can't be
 *             modified.</p>
 */
export interface DBUpgradeDependencyFailureFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBUpgradeDependencyFailureFault";
  $fault: "client";
  message?: string;
}

export namespace DBUpgradeDependencyFailureFault {
  export const filterSensitiveLog = (
    obj: DBUpgradeDependencyFailureFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DBUpgradeDependencyFailureFault =>
    __isa(o, "DBUpgradeDependencyFailureFault");
}

export interface DeleteCustomAvailabilityZoneMessage {
  __type?: "DeleteCustomAvailabilityZoneMessage";
  /**
   * <p>The custom AZ identifier.</p>
   */
  CustomAvailabilityZoneId: string | undefined;
}

export namespace DeleteCustomAvailabilityZoneMessage {
  export const filterSensitiveLog = (
    obj: DeleteCustomAvailabilityZoneMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCustomAvailabilityZoneMessage =>
    __isa(o, "DeleteCustomAvailabilityZoneMessage");
}

export interface DeleteCustomAvailabilityZoneResult {
  __type?: "DeleteCustomAvailabilityZoneResult";
  /**
   * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
   *         <p>For more information about RDS on VMware, see the
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
   *                 <i>RDS on VMware User Guide.</i>
   *             </a>
   *          </p>
   */
  CustomAvailabilityZone?: CustomAvailabilityZone;
}

export namespace DeleteCustomAvailabilityZoneResult {
  export const filterSensitiveLog = (
    obj: DeleteCustomAvailabilityZoneResult
  ): any => ({
    ...obj,
    ...(obj.CustomAvailabilityZone && {
      CustomAvailabilityZone: CustomAvailabilityZone.filterSensitiveLog(
        obj.CustomAvailabilityZone
      )
    })
  });
  export const isa = (o: any): o is DeleteCustomAvailabilityZoneResult =>
    __isa(o, "DeleteCustomAvailabilityZoneResult");
}

export interface DeleteDBClusterEndpointMessage {
  __type?: "DeleteDBClusterEndpointMessage";
  /**
   * <p>The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;
}

export namespace DeleteDBClusterEndpointMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBClusterEndpointMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterEndpointMessage =>
    __isa(o, "DeleteDBClusterEndpointMessage");
}

/**
 * <p></p>
 */
export interface DeleteDBClusterMessage {
  __type?: "DeleteDBClusterMessage";
  /**
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>
   *       The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code>
   *       is disabled.
   *     </p>
   *          <note>
   *             <p>
   *           Specifying this parameter and also skipping the creation of a final DB cluster snapshot
   *           with the <code>SkipFinalShapshot</code> parameter results in an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;

  /**
   * <p>A value that indicates whether to skip the creation of a final DB cluster snapshot before the DB cluster is deleted.
   *           If skip is specified, no DB cluster snapshot is created. If skip isn't specified, a DB cluster snapshot
   *           is created before the DB cluster is deleted. By default, skip isn't specified, and the DB cluster snapshot is created.
   *           By default, this parameter is disabled.</p>
   *          <note>
   *             <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is disabled.</p>
   *          </note>
   */
  SkipFinalSnapshot?: boolean;
}

export namespace DeleteDBClusterMessage {
  export const filterSensitiveLog = (obj: DeleteDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterMessage =>
    __isa(o, "DeleteDBClusterMessage");
}

/**
 * <p></p>
 */
export interface DeleteDBClusterParameterGroupMessage {
  __type?: "DeleteDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>You can't delete a default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Can't be associated with any DB clusters.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;
}

export namespace DeleteDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterParameterGroupMessage =>
    __isa(o, "DeleteDBClusterParameterGroupMessage");
}

export interface DeleteDBClusterResult {
  __type?: "DeleteDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace DeleteDBClusterResult {
  export const filterSensitiveLog = (obj: DeleteDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterResult =>
    __isa(o, "DeleteDBClusterResult");
}

/**
 * <p></p>
 */
export interface DeleteDBClusterSnapshotMessage {
  __type?: "DeleteDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBClusterSnapshotMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBClusterSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterSnapshotMessage =>
    __isa(o, "DeleteDBClusterSnapshotMessage");
}

export interface DeleteDBClusterSnapshotResult {
  __type?: "DeleteDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.
   *       </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace DeleteDBClusterSnapshotResult {
  export const filterSensitiveLog = (
    obj: DeleteDBClusterSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBClusterSnapshotResult =>
    __isa(o, "DeleteDBClusterSnapshotResult");
}

/**
 * <p>Parameter input for the <code>DeleteDBInstanceAutomatedBackup</code> operation. </p>
 */
export interface DeleteDBInstanceAutomatedBackupMessage {
  __type?: "DeleteDBInstanceAutomatedBackupMessage";
  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.</p>
   */
  DbiResourceId: string | undefined;
}

export namespace DeleteDBInstanceAutomatedBackupMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBInstanceAutomatedBackupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBInstanceAutomatedBackupMessage =>
    __isa(o, "DeleteDBInstanceAutomatedBackupMessage");
}

export interface DeleteDBInstanceAutomatedBackupResult {
  __type?: "DeleteDBInstanceAutomatedBackupResult";
  /**
   * <p>An automated backup of a DB instance. It it consists of
   *             system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance. </p>
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}

export namespace DeleteDBInstanceAutomatedBackupResult {
  export const filterSensitiveLog = (
    obj: DeleteDBInstanceAutomatedBackupResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBInstanceAutomatedBackupResult =>
    __isa(o, "DeleteDBInstanceAutomatedBackupResult");
}

export interface DeleteDBInstanceMessage {
  __type?: "DeleteDBInstanceMessage";
  DBInstanceIdentifier: string | undefined;
  FinalDBSnapshotIdentifier?: string;
  SkipFinalSnapshot?: boolean;
}

export namespace DeleteDBInstanceMessage {
  export const filterSensitiveLog = (obj: DeleteDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBInstanceMessage =>
    __isa(o, "DeleteDBInstanceMessage");
}

export interface DeleteDBInstanceResult {
  __type?: "DeleteDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace DeleteDBInstanceResult {
  export const filterSensitiveLog = (obj: DeleteDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBInstanceResult =>
    __isa(o, "DeleteDBInstanceResult");
}

export interface DeleteDBParameterGroupMessage {
  __type?: "DeleteDBParameterGroupMessage";
  DBParameterGroupName: string | undefined;
}

export namespace DeleteDBParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBParameterGroupMessage =>
    __isa(o, "DeleteDBParameterGroupMessage");
}

export interface DeleteDBProxyRequest {
  __type?: "DeleteDBProxyRequest";
  /**
   * <p>The name of the DB proxy to delete.</p>
   */
  DBProxyName: string | undefined;
}

export namespace DeleteDBProxyRequest {
  export const filterSensitiveLog = (obj: DeleteDBProxyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBProxyRequest =>
    __isa(o, "DeleteDBProxyRequest");
}

export interface DeleteDBProxyResponse {
  __type?: "DeleteDBProxyResponse";
  /**
   * <p>The data structure representing the details of the DB proxy that you delete.</p>
   */
  DBProxy?: DBProxy;
}

export namespace DeleteDBProxyResponse {
  export const filterSensitiveLog = (obj: DeleteDBProxyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBProxyResponse =>
    __isa(o, "DeleteDBProxyResponse");
}

export interface DeleteDBSecurityGroupMessage {
  __type?: "DeleteDBSecurityGroupMessage";
  DBSecurityGroupName: string | undefined;
}

export namespace DeleteDBSecurityGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteDBSecurityGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBSecurityGroupMessage =>
    __isa(o, "DeleteDBSecurityGroupMessage");
}

/**
 * <p></p>
 */
export interface DeleteDBSnapshotMessage {
  __type?: "DeleteDBSnapshotMessage";
  /**
   * <p>The DB snapshot identifier.</p>
   *          <p>Constraints: Must be the name of an existing DB snapshot in the <code>available</code> state.</p>
   */
  DBSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBSnapshotMessage {
  export const filterSensitiveLog = (obj: DeleteDBSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBSnapshotMessage =>
    __isa(o, "DeleteDBSnapshotMessage");
}

export interface DeleteDBSnapshotResult {
  __type?: "DeleteDBSnapshotResult";
  DBSnapshot?: DBSnapshot;
}

export namespace DeleteDBSnapshotResult {
  export const filterSensitiveLog = (obj: DeleteDBSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBSnapshotResult =>
    __isa(o, "DeleteDBSnapshotResult");
}

export interface DeleteDBSubnetGroupMessage {
  __type?: "DeleteDBSubnetGroupMessage";
  DBSubnetGroupName: string | undefined;
}

export namespace DeleteDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: DeleteDBSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDBSubnetGroupMessage =>
    __isa(o, "DeleteDBSubnetGroupMessage");
}

export interface DeleteEventSubscriptionMessage {
  __type?: "DeleteEventSubscriptionMessage";
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

export interface DeleteEventSubscriptionResult {
  __type?: "DeleteEventSubscriptionResult";
  EventSubscription?: EventSubscription;
}

export namespace DeleteEventSubscriptionResult {
  export const filterSensitiveLog = (
    obj: DeleteEventSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEventSubscriptionResult =>
    __isa(o, "DeleteEventSubscriptionResult");
}

export interface DeleteGlobalClusterMessage {
  __type?: "DeleteGlobalClusterMessage";
  /**
   * <p>
   *         The cluster identifier of the global database cluster being deleted.
   *       </p>
   */
  GlobalClusterIdentifier: string | undefined;
}

export namespace DeleteGlobalClusterMessage {
  export const filterSensitiveLog = (obj: DeleteGlobalClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGlobalClusterMessage =>
    __isa(o, "DeleteGlobalClusterMessage");
}

export interface DeleteGlobalClusterResult {
  __type?: "DeleteGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace DeleteGlobalClusterResult {
  export const filterSensitiveLog = (obj: DeleteGlobalClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGlobalClusterResult =>
    __isa(o, "DeleteGlobalClusterResult");
}

export interface DeleteInstallationMediaMessage {
  __type?: "DeleteInstallationMediaMessage";
  /**
   * <p>The installation medium ID.</p>
   */
  InstallationMediaId: string | undefined;
}

export namespace DeleteInstallationMediaMessage {
  export const filterSensitiveLog = (
    obj: DeleteInstallationMediaMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteInstallationMediaMessage =>
    __isa(o, "DeleteInstallationMediaMessage");
}

export interface DeleteOptionGroupMessage {
  __type?: "DeleteOptionGroupMessage";
  OptionGroupName: string | undefined;
}

export namespace DeleteOptionGroupMessage {
  export const filterSensitiveLog = (obj: DeleteOptionGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteOptionGroupMessage =>
    __isa(o, "DeleteOptionGroupMessage");
}

export interface DeregisterDBProxyTargetsRequest {
  __type?: "DeregisterDBProxyTargetsRequest";
  /**
   * <p>One or more DB cluster identifiers.</p>
   */
  DBClusterIdentifiers?: string[];

  /**
   * <p>One or more DB instance identifiers.</p>
   */
  DBInstanceIdentifiers?: string[];

  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   */
  TargetGroupName?: string;
}

export namespace DeregisterDBProxyTargetsRequest {
  export const filterSensitiveLog = (
    obj: DeregisterDBProxyTargetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterDBProxyTargetsRequest =>
    __isa(o, "DeregisterDBProxyTargetsRequest");
}

export interface DeregisterDBProxyTargetsResponse {
  __type?: "DeregisterDBProxyTargetsResponse";
}

export namespace DeregisterDBProxyTargetsResponse {
  export const filterSensitiveLog = (
    obj: DeregisterDBProxyTargetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterDBProxyTargetsResponse =>
    __isa(o, "DeregisterDBProxyTargetsResponse");
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
export interface DescribeCertificatesMessage {
  __type?: "DescribeCertificatesMessage";
  /**
   * <p>The user-supplied certificate identifier. If this parameter is specified, information for only the identified certificate is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing CertificateIdentifier.</p>
   *             </li>
   *          </ul>
   */
  CertificateIdentifier?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeCertificates</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
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

export interface DescribeCustomAvailabilityZonesMessage {
  __type?: "DescribeCustomAvailabilityZonesMessage";
  /**
   * <p>The custom AZ identifier. If this parameter is specified, information from only the specific custom AZ is returned.</p>
   */
  CustomAvailabilityZoneId?: string;

  /**
   * <p>A filter that specifies one or more custom AZs to describe.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeCustomAvailabilityZones</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeCustomAvailabilityZonesMessage {
  export const filterSensitiveLog = (
    obj: DescribeCustomAvailabilityZonesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCustomAvailabilityZonesMessage =>
    __isa(o, "DescribeCustomAvailabilityZonesMessage");
}

/**
 * <p></p>
 */
export interface DescribeDBClusterBacktracksMessage {
  __type?: "DescribeDBClusterBacktracksMessage";
  /**
   * <p>If specified, this value is the backtrack identifier of the backtrack to be
   *             described.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain a valid universally unique identifier (UUID). For more
   *                     information about UUIDs, see <a href="http://www.ietf.org/rfc/rfc4122.txt">A Universally Unique Identifier
   *                         (UUID) URN Namespace</a>.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>123e4567-e89b-12d3-a456-426655440000</code>
   *         </p>
   */
  BacktrackIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster to be described. This parameter is
   *             stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>A filter that specifies one or more DB clusters to describe. Supported filters
   *             include the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                     <code>db-cluster-backtrack-id</code> - Accepts backtrack identifiers. The
   *                     results list includes information about only the backtracks identified by these
   *                     identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-cluster-backtrack-status</code> - Accepts any of the following backtrack status values:</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>applying</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>completed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                 <p>The results list includes information about only the backtracks identified
   *                     by these values.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous
   *             <code>DescribeDBClusterBacktracks</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClusterBacktracksMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterBacktracksMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterBacktracksMessage =>
    __isa(o, "DescribeDBClusterBacktracksMessage");
}

export interface DescribeDBClusterEndpointsMessage {
  __type?: "DescribeDBClusterEndpointsMessage";
  /**
   * <p>The identifier of the endpoint to describe. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A set of name-value pairs that define which endpoints to include in the output.
   *        The filters are specified as name-value pairs, in the format
   *        <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>.
   *        <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>.
   *          <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>.
   *        <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>.
   *        <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>modifying</code>.
   *      </p>
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous
   *             <code>DescribeDBClusterEndpoints</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClusterEndpointsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterEndpointsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterEndpointsMessage =>
    __isa(o, "DescribeDBClusterEndpointsMessage");
}

/**
 * <p></p>
 */
export interface DescribeDBClusterParameterGroupsMessage {
  __type?: "DescribeDBClusterParameterGroupsMessage";
  /**
   * <p>The name of a specific DB cluster parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBClusterParameterGroups</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *       </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClusterParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterParameterGroupsMessage =>
    __isa(o, "DescribeDBClusterParameterGroupsMessage");
}

/**
 * <p></p>
 */
export interface DescribeDBClusterParametersMessage {
  __type?: "DescribeDBClusterParametersMessage";
  /**
   * <p>The name of a specific DB cluster parameter group to return parameter details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *       An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameters</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>
   *       The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *       A value that indicates to return only parameters for a specific source.
   *       Parameter sources can be <code>engine</code>, <code>service</code>,
   *       or <code>customer</code>.
   *     </p>
   */
  Source?: string;
}

export namespace DescribeDBClusterParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterParametersMessage =>
    __isa(o, "DescribeDBClusterParametersMessage");
}

/**
 * <p></p>
 */
export interface DescribeDBClustersMessage {
  __type?: "DescribeDBClustersMessage";
  /**
   * <p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB clusters to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>Optional Boolean parameter that specifies whether the output includes information about clusters
   *           shared from other AWS accounts.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusters</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClustersMessage {
  export const filterSensitiveLog = (obj: DescribeDBClustersMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClustersMessage =>
    __isa(o, "DescribeDBClustersMessage");
}

/**
 * <p></p>
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  __type?: "DescribeDBClusterSnapshotAttributesMessage";
  /**
   * <p>The identifier for the DB cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBClusterSnapshotAttributesMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterSnapshotAttributesMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeDBClusterSnapshotAttributesMessage =>
    __isa(o, "DescribeDBClusterSnapshotAttributesMessage");
}

export interface DescribeDBClusterSnapshotAttributesResult {
  __type?: "DescribeDBClusterSnapshotAttributesResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace DescribeDBClusterSnapshotAttributesResult {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterSnapshotAttributesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterSnapshotAttributesResult =>
    __isa(o, "DescribeDBClusterSnapshotAttributesResult");
}

/**
 * <p></p>
 */
export interface DescribeDBClusterSnapshotsMessage {
  __type?: "DescribeDBClusterSnapshotsMessage";
  /**
   * <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for.
   *             This parameter can't be used in conjunction with the
   *             <code>DBClusterSnapshotIdentifier</code> parameter.
   *             This parameter isn't case-sensitive.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A specific DB cluster snapshot identifier to describe.
   *             This parameter can't be used in conjunction with the
   *             <code>DBClusterIdentifier</code> parameter.
   *             This value is stored as a lowercase string.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p>
   *             </li>
   *             <li>
   *                <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB cluster snapshots to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-cluster-snapshot-id</code> - Accepts DB cluster snapshot identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-type</code> - Accepts types of DB cluster snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts names of database engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied
   *             or restored by any AWS account. By default, the public snapshots are not included.</p>
   *         <p>You can share a manual DB cluster snapshot  as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  IncludePublic?: boolean;

  /**
   * <p>A value that indicates whether to include shared manual DB cluster snapshots
   *             from other AWS accounts that this AWS account has been given
   *             permission to copy or restore. By default, these snapshots are not included.</p>
   *         <p>You can give an AWS account permission to restore a manual DB cluster snapshot from
   *             another AWS account by the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterSnapshots</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by
   *               Amazon RDS for my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are
   *           returned. You can include shared DB cluster snapshots with these results by enabling the <code>IncludeShared</code>
   *           parameter. You can include public DB cluster snapshots with these results by enabling the
   *           <code>IncludePublic</code> parameter.</p>
   *          <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values
   *           of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *           set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *           <code>public</code>.</p>
   */
  SnapshotType?: string;
}

export namespace DescribeDBClusterSnapshotsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBClusterSnapshotsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBClusterSnapshotsMessage =>
    __isa(o, "DescribeDBClusterSnapshotsMessage");
}

export interface DescribeDBEngineVersionsMessage {
  __type?: "DescribeDBEngineVersionsMessage";
  DBParameterGroupFamily?: string;
  DefaultOnly?: boolean;
  Engine?: string;
  EngineVersion?: string;
  Filters?: Filter[];
  ListSupportedCharacterSets?: boolean;
  Marker?: string;
  MaxRecords?: number;
}

export namespace DescribeDBEngineVersionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBEngineVersionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBEngineVersionsMessage =>
    __isa(o, "DescribeDBEngineVersionsMessage");
}

/**
 * <p>Parameter input for DescribeDBInstanceAutomatedBackups. </p>
 */
export interface DescribeDBInstanceAutomatedBackupsMessage {
  __type?: "DescribeDBInstanceAutomatedBackupsMessage";
  /**
   * <p>(Optional) The user-supplied instance identifier. If this parameter is specified, it must
   *             match the identifier of an existing DB instance. It returns information from the
   *             specific DB instance' automated backup. This parameter isn't case-sensitive. </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The resource ID of the DB instance that is the source of
   * 		    the automated backup. This parameter isn't case-sensitive. </p>
   */
  DbiResourceId?: string;

  /**
   * <p>A filter that specifies which resources to return based on status.</p>
   * 		       <p>Supported filters are the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>status</code>
   * 				           </p>
   * 			            <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code> - automated backups for current instances</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>retained</code> - automated backups for deleted instances</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>creating</code> - automated backups that are waiting
   * 			        for the first automated snapshot to be available</p>
   *                   </li>
   *                </ul>
   * 			         </li>
   *             <li>
   *                <p>
   * 		                <code>db-instance-id</code> - Accepts DB instance identifiers and
   * 		        Amazon Resource Names (ARNs) for DB instances. The results list includes only information about
   * 		        the DB instance automated backupss identified by these ARNs.</p>
   * 		          </li>
   *             <li>
   *                <p>
   * 		                <code>dbi-resource-id</code> - Accepts DB instance resource identifiers and DB
   * 		        Amazon Resource Names (ARNs) for DB instances. The results list includes only information about
   * 		        the DB instance resources identified by these ARNs.</p>
   * 		          </li>
   *          </ul>
   * 		       <p>Returns all resources by default. The status for each resource is specified in the response.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The pagination token provided in the previous request. If this parameter is specified the response
   * 			includes only records beyond the marker, up to <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   * 			<code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   * 			you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBInstanceAutomatedBackupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBInstanceAutomatedBackupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBInstanceAutomatedBackupsMessage =>
    __isa(o, "DescribeDBInstanceAutomatedBackupsMessage");
}

/**
 * <p></p>
 */
export interface DescribeDBInstancesMessage {
  __type?: "DescribeDBInstancesMessage";
  /**
   * <p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB instances to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB instances associated with the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *               instance Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB instances identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dbi-resource-id</code> - Accepts DB instance resource identifiers. The results list will
   *               only include information about the DB instances identified by these DB instance resource identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>domain</code> - Accepts Active Directory directory IDs. The results list will only
   *               include information about the DB instances associated with these domains.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts engine names. The results list will only include information
   *               about the DB instances for these engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBInstances</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBInstancesMessage {
  export const filterSensitiveLog = (obj: DescribeDBInstancesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBInstancesMessage =>
    __isa(o, "DescribeDBInstancesMessage");
}

export interface DescribeDBLogFilesDetails {
  __type?: "DescribeDBLogFilesDetails";
  LastWritten?: number;
  LogFileName?: string;
  Size?: number;
}

export namespace DescribeDBLogFilesDetails {
  export const filterSensitiveLog = (obj: DescribeDBLogFilesDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBLogFilesDetails =>
    __isa(o, "DescribeDBLogFilesDetails");
}

export interface DescribeDBLogFilesMessage {
  __type?: "DescribeDBLogFilesMessage";
  DBInstanceIdentifier: string | undefined;
  FileLastWritten?: number;
  FileSize?: number;
  FilenameContains?: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}

export namespace DescribeDBLogFilesMessage {
  export const filterSensitiveLog = (obj: DescribeDBLogFilesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBLogFilesMessage =>
    __isa(o, "DescribeDBLogFilesMessage");
}

export interface DescribeDBLogFilesResponse {
  __type?: "DescribeDBLogFilesResponse";
  DescribeDBLogFiles?: DescribeDBLogFilesDetails[];
  Marker?: string;
}

export namespace DescribeDBLogFilesResponse {
  export const filterSensitiveLog = (obj: DescribeDBLogFilesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBLogFilesResponse =>
    __isa(o, "DescribeDBLogFilesResponse");
}

export interface DescribeDBParameterGroupsMessage {
  __type?: "DescribeDBParameterGroupsMessage";
  DBParameterGroupName?: string;
  Marker?: string;
  MaxRecords?: number;
}

export namespace DescribeDBParameterGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBParameterGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBParameterGroupsMessage =>
    __isa(o, "DescribeDBParameterGroupsMessage");
}

export interface DescribeDBParametersMessage {
  __type?: "DescribeDBParametersMessage";
  DBParameterGroupName: string | undefined;
  Marker?: string;
  MaxRecords?: number;
  Source?: string;
}

export namespace DescribeDBParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBParametersMessage =>
    __isa(o, "DescribeDBParametersMessage");
}

export interface DescribeDBProxiesRequest {
  __type?: "DescribeDBProxiesRequest";
  /**
   * <p>The name of the DB proxy.</p>
   */
  DBProxyName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *           than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *           included in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBProxiesRequest {
  export const filterSensitiveLog = (obj: DescribeDBProxiesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBProxiesRequest =>
    __isa(o, "DescribeDBProxiesRequest");
}

export interface DescribeDBProxiesResponse {
  __type?: "DescribeDBProxiesResponse";
  /**
   * <p>A return value representing an arbitrary number of <code>DBProxy</code> data structures.</p>
   */
  DBProxies?: DBProxy[];

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;
}

export namespace DescribeDBProxiesResponse {
  export const filterSensitiveLog = (obj: DescribeDBProxiesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBProxiesResponse =>
    __isa(o, "DescribeDBProxiesResponse");
}

export interface DescribeDBProxyTargetGroupsRequest {
  __type?: "DescribeDBProxyTargetGroupsRequest";
  /**
   * <p>The identifier of the <code>DBProxy</code> associated with the target group.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that the remaining
   *         results can be retrieved.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code> to describe.</p>
   */
  TargetGroupName?: string;
}

export namespace DescribeDBProxyTargetGroupsRequest {
  export const filterSensitiveLog = (
    obj: DescribeDBProxyTargetGroupsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBProxyTargetGroupsRequest =>
    __isa(o, "DescribeDBProxyTargetGroupsRequest");
}

export interface DescribeDBProxyTargetGroupsResponse {
  __type?: "DescribeDBProxyTargetGroupsResponse";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>An arbitrary number of <code>DBProxyTargetGroup</code> objects, containing details of the corresponding target groups.</p>
   */
  TargetGroups?: DBProxyTargetGroup[];
}

export namespace DescribeDBProxyTargetGroupsResponse {
  export const filterSensitiveLog = (
    obj: DescribeDBProxyTargetGroupsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBProxyTargetGroupsResponse =>
    __isa(o, "DescribeDBProxyTargetGroupsResponse");
}

export interface DescribeDBProxyTargetsRequest {
  __type?: "DescribeDBProxyTargetsRequest";
  /**
   * <p>The identifier of the <code>DBProxyTarget</code> to describe.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that the remaining
   *         results can be retrieved.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code> to describe.</p>
   */
  TargetGroupName?: string;
}

export namespace DescribeDBProxyTargetsRequest {
  export const filterSensitiveLog = (
    obj: DescribeDBProxyTargetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBProxyTargetsRequest =>
    __isa(o, "DescribeDBProxyTargetsRequest");
}

export interface DescribeDBProxyTargetsResponse {
  __type?: "DescribeDBProxyTargetsResponse";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>An arbitrary number of <code>DBProxyTarget</code> objects, containing details of the corresponding targets.</p>
   */
  Targets?: DBProxyTarget[];
}

export namespace DescribeDBProxyTargetsResponse {
  export const filterSensitiveLog = (
    obj: DescribeDBProxyTargetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBProxyTargetsResponse =>
    __isa(o, "DescribeDBProxyTargetsResponse");
}

export interface DescribeDBSecurityGroupsMessage {
  __type?: "DescribeDBSecurityGroupsMessage";
  DBSecurityGroupName?: string;
  Marker?: string;
  MaxRecords?: number;
}

export namespace DescribeDBSecurityGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBSecurityGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBSecurityGroupsMessage =>
    __isa(o, "DescribeDBSecurityGroupsMessage");
}

/**
 * <p></p>
 */
export interface DescribeDBSnapshotAttributesMessage {
  __type?: "DescribeDBSnapshotAttributesMessage";
  /**
   * <p>The identifier for the DB snapshot to describe the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBSnapshotAttributesMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBSnapshotAttributesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBSnapshotAttributesMessage =>
    __isa(o, "DescribeDBSnapshotAttributesMessage");
}

export interface DescribeDBSnapshotAttributesResult {
  __type?: "DescribeDBSnapshotAttributesResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace DescribeDBSnapshotAttributesResult {
  export const filterSensitiveLog = (
    obj: DescribeDBSnapshotAttributesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBSnapshotAttributesResult =>
    __isa(o, "DescribeDBSnapshotAttributesResult");
}

export interface DescribeDBSnapshotsMessage {
  __type?: "DescribeDBSnapshotsMessage";
  DBInstanceIdentifier?: string;
  DBSnapshotIdentifier?: string;
  Marker?: string;
  MaxRecords?: number;
  SnapshotType?: string;
}

export namespace DescribeDBSnapshotsMessage {
  export const filterSensitiveLog = (obj: DescribeDBSnapshotsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBSnapshotsMessage =>
    __isa(o, "DescribeDBSnapshotsMessage");
}

export interface DescribeDBSubnetGroupsMessage {
  __type?: "DescribeDBSubnetGroupsMessage";
  DBSubnetGroupName?: string;
  Marker?: string;
  MaxRecords?: number;
}

export namespace DescribeDBSubnetGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeDBSubnetGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDBSubnetGroupsMessage =>
    __isa(o, "DescribeDBSubnetGroupsMessage");
}

/**
 * <p></p>
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  __type?: "DescribeEngineDefaultClusterParametersMessage";
  /**
   * <p>The name of the DB cluster parameter group family to return engine parameter information for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *       An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>
   *       The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeEngineDefaultClusterParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultClusterParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEngineDefaultClusterParametersMessage =>
    __isa(o, "DescribeEngineDefaultClusterParametersMessage");
}

export interface DescribeEngineDefaultClusterParametersResult {
  __type?: "DescribeEngineDefaultClusterParametersResult";
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultClusterParametersResult {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultClusterParametersResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEngineDefaultClusterParametersResult =>
    __isa(o, "DescribeEngineDefaultClusterParametersResult");
}

export interface DescribeEngineDefaultParametersMessage {
  __type?: "DescribeEngineDefaultParametersMessage";
  DBParameterGroupFamily: string | undefined;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
}

export namespace DescribeEngineDefaultParametersMessage {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultParametersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEngineDefaultParametersMessage =>
    __isa(o, "DescribeEngineDefaultParametersMessage");
}

export interface DescribeEngineDefaultParametersResult {
  __type?: "DescribeEngineDefaultParametersResult";
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultParametersResult {
  export const filterSensitiveLog = (
    obj: DescribeEngineDefaultParametersResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEngineDefaultParametersResult =>
    __isa(o, "DescribeEngineDefaultParametersResult");
}

export interface DescribeEventCategoriesMessage {
  __type?: "DescribeEventCategoriesMessage";
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

export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  Duration?: number;
  EndTime?: Date;
  EventCategories?: string[];
  Marker?: string;
  MaxRecords?: number;
  SourceIdentifier?: string;
  SourceType?: SourceType | string;
  StartTime?: Date;
}

export namespace DescribeEventsMessage {
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventsMessage =>
    __isa(o, "DescribeEventsMessage");
}

export interface DescribeEventSubscriptionsMessage {
  __type?: "DescribeEventSubscriptionsMessage";
  Marker?: string;
  MaxRecords?: number;
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

export interface DescribeGlobalClustersMessage {
  __type?: "DescribeGlobalClustersMessage";
  /**
   * <p>A filter that specifies one or more global DB clusters to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If
   *         this parameter is specified, the response includes only records beyond the marker, up to the value
   *         specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response. If more records exist than the specified
   *         <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *        you can retrieve the remaining results.
   *       </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeGlobalClustersMessage {
  export const filterSensitiveLog = (
    obj: DescribeGlobalClustersMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeGlobalClustersMessage =>
    __isa(o, "DescribeGlobalClustersMessage");
}

export interface DescribeInstallationMediaMessage {
  __type?: "DescribeInstallationMediaMessage";
  /**
   * <p>A filter that specifies one or more installation media to describe. Supported filters
   *           include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>custom-availability-zone-id</code> - Accepts custom Availability Zone (AZ)
   *                     identifiers. The results list includes information about only the custom AZs
   *                     identified by these identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts database engines. The results list includes information about
   *               only the database engines identified by these identifiers.</p>
   *               <p>For more information about the valid engines for installation media, see <a>ImportInstallationMedia</a>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>The installation medium ID.</p>
   */
  InstallationMediaId?: string;

  /**
   * <p>An optional pagination token provided by a previous request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker,
   *           up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>An optional pagination token provided by a previous DescribeInstallationMedia request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeInstallationMediaMessage {
  export const filterSensitiveLog = (
    obj: DescribeInstallationMediaMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstallationMediaMessage =>
    __isa(o, "DescribeInstallationMediaMessage");
}

export interface DescribeOptionGroupOptionsMessage {
  __type?: "DescribeOptionGroupOptionsMessage";
  EngineName: string | undefined;
  Filters?: Filter[];
  MajorEngineVersion?: string;
  Marker?: string;
  MaxRecords?: number;
}

export namespace DescribeOptionGroupOptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeOptionGroupOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOptionGroupOptionsMessage =>
    __isa(o, "DescribeOptionGroupOptionsMessage");
}

export interface DescribeOptionGroupsMessage {
  __type?: "DescribeOptionGroupsMessage";
  EngineName?: string;
  Filters?: Filter[];
  MajorEngineVersion?: string;
  Marker?: string;
  MaxRecords?: number;
  OptionGroupName?: string;
}

export namespace DescribeOptionGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeOptionGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOptionGroupsMessage =>
    __isa(o, "DescribeOptionGroupsMessage");
}

export interface DescribeOrderableDBInstanceOptionsMessage {
  __type?: "DescribeOrderableDBInstanceOptionsMessage";
  DBInstanceClass?: string;
  Engine: string | undefined;
  EngineVersion?: string;
  Filters?: Filter[];
  LicenseModel?: string;
  Marker?: string;
  MaxRecords?: number;
  Vpc?: boolean;
}

export namespace DescribeOrderableDBInstanceOptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeOrderableDBInstanceOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeOrderableDBInstanceOptionsMessage =>
    __isa(o, "DescribeOrderableDBInstanceOptionsMessage");
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  __type?: "DescribePendingMaintenanceActionsMessage";
  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions for.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance
   *               actions for the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *             instance ARNs. The results list will only include pending maintenance
   *             actions for the DB instances identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;
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

export interface DescribeReservedDBInstancesMessage {
  __type?: "DescribeReservedDBInstancesMessage";
  DBInstanceClass?: string;
  Duration?: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
  MultiAZ?: boolean;
  OfferingType?: string;
  ProductDescription?: string;
  ReservedDBInstanceId?: string;
  ReservedDBInstancesOfferingId?: string;
}

export namespace DescribeReservedDBInstancesMessage {
  export const filterSensitiveLog = (
    obj: DescribeReservedDBInstancesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReservedDBInstancesMessage =>
    __isa(o, "DescribeReservedDBInstancesMessage");
}

export interface DescribeReservedDBInstancesOfferingsMessage {
  __type?: "DescribeReservedDBInstancesOfferingsMessage";
  DBInstanceClass?: string;
  Duration?: string;
  Filters?: Filter[];
  Marker?: string;
  MaxRecords?: number;
  MultiAZ?: boolean;
  OfferingType?: string;
  ProductDescription?: string;
  ReservedDBInstancesOfferingId?: string;
}

export namespace DescribeReservedDBInstancesOfferingsMessage {
  export const filterSensitiveLog = (
    obj: DescribeReservedDBInstancesOfferingsMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReservedDBInstancesOfferingsMessage =>
    __isa(o, "DescribeReservedDBInstancesOfferingsMessage");
}

/**
 * <p></p>
 */
export interface DescribeSourceRegionsMessage {
  __type?: "DescribeSourceRegionsMessage";
  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeSourceRegions</code> request. If this parameter is specified, the response
   *             includes only records beyond the marker, up to the value specified by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so you can retrieve the remaining results. </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The source AWS Region name. For example, <code>us-east-1</code>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid AWS Region name.</p>
   *             </li>
   *          </ul>
   */
  RegionName?: string;
}

export namespace DescribeSourceRegionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeSourceRegionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSourceRegionsMessage =>
    __isa(o, "DescribeSourceRegionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeValidDBInstanceModificationsMessage {
  __type?: "DescribeValidDBInstanceModificationsMessage";
  /**
   * <p>The customer identifier or the ARN of your DB instance.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace DescribeValidDBInstanceModificationsMessage {
  export const filterSensitiveLog = (
    obj: DescribeValidDBInstanceModificationsMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeValidDBInstanceModificationsMessage =>
    __isa(o, "DescribeValidDBInstanceModificationsMessage");
}

export interface DescribeValidDBInstanceModificationsResult {
  __type?: "DescribeValidDBInstanceModificationsResult";
  /**
   * <p>Information about valid modifications that you can make to your DB instance.
   *             Contains the result of a successful call to the
   *             <code>DescribeValidDBInstanceModifications</code> action.
   *             You can use this information when you call
   *             <code>ModifyDBInstance</code>.
   *         </p>
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}

export namespace DescribeValidDBInstanceModificationsResult {
  export const filterSensitiveLog = (
    obj: DescribeValidDBInstanceModificationsResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeValidDBInstanceModificationsResult =>
    __isa(o, "DescribeValidDBInstanceModificationsResult");
}

/**
 * <p>An Active Directory Domain membership record associated with the DB instance.</p>
 */
export interface DomainMembership {
  __type?: "DomainMembership";
  /**
   * <p>The identifier of the Active Directory Domain.</p>
   */
  Domain?: string;

  /**
   * <p>The fully qualified domain name of the Active Directory Domain.</p>
   */
  FQDN?: string;

  /**
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  IAMRoleName?: string;

  /**
   * <p>The status of the DB instance's Active Directory Domain membership, such as joined, pending-join, failed etc).</p>
   */
  Status?: string;
}

export namespace DomainMembership {
  export const filterSensitiveLog = (obj: DomainMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainMembership =>
    __isa(o, "DomainMembership");
}

/**
 * <p>
 *             <code>Domain</code> doesn't refer to an existing Active Directory domain.
 *         </p>
 */
export interface DomainNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DomainNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DomainNotFoundFault {
  export const filterSensitiveLog = (obj: DomainNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainNotFoundFault =>
    __isa(o, "DomainNotFoundFault");
}

/**
 * <p>A range of double values.</p>
 */
export interface DoubleRange {
  __type?: "DoubleRange";
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

export namespace DoubleRange {
  export const filterSensitiveLog = (obj: DoubleRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is DoubleRange => __isa(o, "DoubleRange");
}

export interface DownloadDBLogFilePortionDetails {
  __type?: "DownloadDBLogFilePortionDetails";
  AdditionalDataPending?: boolean;
  LogFileData?: string;
  Marker?: string;
}

export namespace DownloadDBLogFilePortionDetails {
  export const filterSensitiveLog = (
    obj: DownloadDBLogFilePortionDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DownloadDBLogFilePortionDetails =>
    __isa(o, "DownloadDBLogFilePortionDetails");
}

export interface DownloadDBLogFilePortionMessage {
  __type?: "DownloadDBLogFilePortionMessage";
  DBInstanceIdentifier: string | undefined;
  LogFileName: string | undefined;
  Marker?: string;
  NumberOfLines?: number;
}

export namespace DownloadDBLogFilePortionMessage {
  export const filterSensitiveLog = (
    obj: DownloadDBLogFilePortionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DownloadDBLogFilePortionMessage =>
    __isa(o, "DownloadDBLogFilePortionMessage");
}

export interface EC2SecurityGroup {
  __type?: "EC2SecurityGroup";
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
  Status?: string;
}

export namespace EC2SecurityGroup {
  export const filterSensitiveLog = (obj: EC2SecurityGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is EC2SecurityGroup =>
    __isa(o, "EC2SecurityGroup");
}

export interface Endpoint {
  __type?: "Endpoint";
  Address?: string;
  Port?: number;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is Endpoint => __isa(o, "Endpoint");
}

export interface EngineDefaults {
  __type?: "EngineDefaults";
  DBParameterGroupFamily?: string;
  Marker?: string;
  Parameters?: Parameter[];
}

export namespace EngineDefaults {
  export const filterSensitiveLog = (obj: EngineDefaults): any => ({
    ...obj
  });
  export const isa = (o: any): o is EngineDefaults =>
    __isa(o, "EngineDefaults");
}

export enum EngineFamily {
  MYSQL = "MYSQL"
}

export interface Event {
  __type?: "Event";
  Date?: Date;
  EventCategories?: string[];
  Message?: string;
  SourceIdentifier?: string;
  SourceType?: SourceType | string;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj
  });
  export const isa = (o: any): o is Event => __isa(o, "Event");
}

/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventCategories</code> action.</p>
 */
export interface EventCategoriesMap {
  __type?: "EventCategoriesMap";
  /**
   * <p>The event categories for the specified source type</p>
   */
  EventCategories?: string[];

  /**
   * <p>The source type that the returned categories belong to</p>
   */
  SourceType?: string;
}

export namespace EventCategoriesMap {
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventCategoriesMap =>
    __isa(o, "EventCategoriesMap");
}

export interface EventCategoriesMessage {
  __type?: "EventCategoriesMessage";
  EventCategoriesMapList?: EventCategoriesMap[];
}

export namespace EventCategoriesMessage {
  export const filterSensitiveLog = (obj: EventCategoriesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventCategoriesMessage =>
    __isa(o, "EventCategoriesMessage");
}

export interface EventsMessage {
  __type?: "EventsMessage";
  Events?: Event[];
  Marker?: string;
}

export namespace EventsMessage {
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventsMessage => __isa(o, "EventsMessage");
}

export interface EventSubscription {
  __type?: "EventSubscription";
  CustSubscriptionId?: string;
  CustomerAwsId?: string;
  Enabled?: boolean;
  EventCategoriesList?: string[];
  SnsTopicArn?: string;
  SourceIdsList?: string[];
  SourceType?: string;
  Status?: string;
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
 * <p>You have reached the maximum number of event subscriptions.</p>
 */
export interface EventSubscriptionQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "EventSubscriptionQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace EventSubscriptionQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: EventSubscriptionQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventSubscriptionQuotaExceededFault =>
    __isa(o, "EventSubscriptionQuotaExceededFault");
}

export interface EventSubscriptionsMessage {
  __type?: "EventSubscriptionsMessage";
  EventSubscriptionsList?: EventSubscription[];
  Marker?: string;
}

export namespace EventSubscriptionsMessage {
  export const filterSensitiveLog = (obj: EventSubscriptionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventSubscriptionsMessage =>
    __isa(o, "EventSubscriptionsMessage");
}

/**
 * <p></p>
 */
export interface FailoverDBClusterMessage {
  __type?: "FailoverDBClusterMessage";
  /**
   * <p>A DB cluster identifier to force a failover for. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *         <p>You must specify the instance identifier for an Aurora Replica in the DB cluster.
   *         For example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

export namespace FailoverDBClusterMessage {
  export const filterSensitiveLog = (obj: FailoverDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailoverDBClusterMessage =>
    __isa(o, "FailoverDBClusterMessage");
}

export interface FailoverDBClusterResult {
  __type?: "FailoverDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace FailoverDBClusterResult {
  export const filterSensitiveLog = (obj: FailoverDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailoverDBClusterResult =>
    __isa(o, "FailoverDBClusterResult");
}

export interface Filter {
  __type?: "Filter";
  Name: string | undefined;
  Values: string[] | undefined;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

/**
 * <p>A data type representing an Aurora global database.</p>
 */
export interface GlobalCluster {
  __type?: "GlobalCluster";
  /**
   * <p>
   *         The default database name within the new global database cluster.
   *       </p>
   */
  DatabaseName?: string;

  /**
   * <p>
   *         The deletion protection setting for the new global database cluster.
   *       </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>
   *         The Aurora database engine used by the global database cluster.
   *       </p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the global database cluster.</p>
   */
  GlobalClusterArn?: string;

  /**
   * <p>
   *         Contains a user-supplied global database cluster identifier. This identifier is the unique key that
   *         identifies a global database cluster.
   *       </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The list of cluster IDs for secondary clusters within the global database cluster. Currently limited to
   *         1 item.
   *       </p>
   */
  GlobalClusterMembers?: GlobalClusterMember[];

  /**
   * <p>
   *         The AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in
   *         AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.
   *       </p>
   */
  GlobalClusterResourceId?: string;

  /**
   * <p>Specifies the current state of this global database cluster.</p>
   */
  Status?: string;

  /**
   * <p>
   *         The storage encryption setting for the global database cluster.
   *       </p>
   */
  StorageEncrypted?: boolean;
}

export namespace GlobalCluster {
  export const filterSensitiveLog = (obj: GlobalCluster): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalCluster => __isa(o, "GlobalCluster");
}

/**
 * <p></p>
 */
export interface GlobalClusterAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace GlobalClusterAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: GlobalClusterAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalClusterAlreadyExistsFault =>
    __isa(o, "GlobalClusterAlreadyExistsFault");
}

/**
 * <p>
 *         A data structure with information about any primary and
 *         secondary clusters associated with an Aurora global database.
 *       </p>
 */
export interface GlobalClusterMember {
  __type?: "GlobalClusterMember";
  /**
   * <p>
   *        The Amazon Resource Name (ARN) for each Aurora cluster.
   *       </p>
   */
  DBClusterArn?: string;

  /**
   * <p>
   *         Specifies whether the Aurora cluster is the primary cluster
   *         (that is, has read-write capability) for the Aurora global
   *         database with which it is associated.
   *       </p>
   */
  IsWriter?: boolean;

  /**
   * <p>
   *         The Amazon Resource Name (ARN) for each read-only secondary cluster
   *         associated with the Aurora global database.
   *       </p>
   */
  Readers?: string[];
}

export namespace GlobalClusterMember {
  export const filterSensitiveLog = (obj: GlobalClusterMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalClusterMember =>
    __isa(o, "GlobalClusterMember");
}

/**
 * <p></p>
 */
export interface GlobalClusterNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace GlobalClusterNotFoundFault {
  export const filterSensitiveLog = (obj: GlobalClusterNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalClusterNotFoundFault =>
    __isa(o, "GlobalClusterNotFoundFault");
}

/**
 * <p></p>
 */
export interface GlobalClusterQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace GlobalClusterQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: GlobalClusterQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalClusterQuotaExceededFault =>
    __isa(o, "GlobalClusterQuotaExceededFault");
}

export interface GlobalClustersMessage {
  __type?: "GlobalClustersMessage";
  /**
   * <p>
   *         The list of global clusters returned by this request.
   *       </p>
   */
  GlobalClusters?: GlobalCluster[];

  /**
   * <p>
   *         An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;
}

export namespace GlobalClustersMessage {
  export const filterSensitiveLog = (obj: GlobalClustersMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlobalClustersMessage =>
    __isa(o, "GlobalClustersMessage");
}

export enum IAMAuthMode {
  DISABLED = "DISABLED",
  REQUIRED = "REQUIRED"
}

export interface ImportInstallationMediaMessage {
  __type?: "ImportInstallationMediaMessage";
  /**
   * <p>The identifier of the custom Availability Zone (AZ) to import the installation media to.</p>
   */
  CustomAvailabilityZoneId: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.
   *       </p>
   *
   *          <p>The list only includes supported DB engines that require an on-premises
   *           customer provided license.
   *       </p>
   *
   *          <p>Valid Values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine: string | undefined;

  /**
   * <p>The path to the installation medium for the specified DB engine.</p>
   *          <p>Example: <code>SQLServerISO/en_sql_server_2016_enterprise_x64_dvd_8701793.iso</code>
   *          </p>
   */
  EngineInstallationMediaPath: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>For a list of valid engine versions, call <a>DescribeDBEngineVersions</a>.</p>
   *          <p>The following are the database engines and links to information about the major and minor
   *           versions. The list only includes DB engines that require an on-premises
   *           customer provided license.</p>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.FeatureSupport">Version and Feature Support on Amazon RDS</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>The path to the installation medium for the operating system associated with the specified DB engine.</p>
   *         <p>Example: <code>WindowsISO/en_windows_server_2016_x64_dvd_9327751.iso</code>
   *          </p>
   */
  OSInstallationMediaPath: string | undefined;
}

export namespace ImportInstallationMediaMessage {
  export const filterSensitiveLog = (
    obj: ImportInstallationMediaMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportInstallationMediaMessage =>
    __isa(o, "ImportInstallationMediaMessage");
}

/**
 * <p>Contains the installation media for a DB engine that requires an on-premises
 *           customer provided license, such as Microsoft SQL Server.</p>
 */
export interface InstallationMedia {
  __type?: "InstallationMedia";
  /**
   * <p>The custom Availability Zone (AZ) that contains the installation media.</p>
   */
  CustomAvailabilityZoneId?: string;

  /**
   * <p>The DB engine.</p>
   */
  Engine?: string;

  /**
   * <p>The path to the installation medium for the DB engine.</p>
   */
  EngineInstallationMediaPath?: string;

  /**
   * <p>The engine version of the DB engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>If an installation media failure occurred, the cause of the failure.</p>
   */
  FailureCause?: InstallationMediaFailureCause;

  /**
   * <p>The installation medium ID.</p>
   */
  InstallationMediaId?: string;

  /**
   * <p>The path to the installation medium for the operating system associated with the DB engine.</p>
   */
  OSInstallationMediaPath?: string;

  /**
   * <p>The status of the installation medium.</p>
   */
  Status?: string;
}

export namespace InstallationMedia {
  export const filterSensitiveLog = (obj: InstallationMedia): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstallationMedia =>
    __isa(o, "InstallationMedia");
}

/**
 * <p>The specified installation medium has already been imported.</p>
 */
export interface InstallationMediaAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InstallationMediaAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace InstallationMediaAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: InstallationMediaAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstallationMediaAlreadyExistsFault =>
    __isa(o, "InstallationMediaAlreadyExistsFault");
}

/**
 * <p>Contains the cause of an installation media failure. Installation media is used
 *           for a DB engine that requires an on-premises
 *           customer provided license, such as Microsoft SQL Server.</p>
 */
export interface InstallationMediaFailureCause {
  __type?: "InstallationMediaFailureCause";
  /**
   * <p>The reason that an installation media import failed.</p>
   */
  Message?: string;
}

export namespace InstallationMediaFailureCause {
  export const filterSensitiveLog = (
    obj: InstallationMediaFailureCause
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstallationMediaFailureCause =>
    __isa(o, "InstallationMediaFailureCause");
}

export interface InstallationMediaMessage {
  __type?: "InstallationMediaMessage";
  /**
   * <p>The list of <a>InstallationMedia</a> objects for the AWS account.</p>
   */
  InstallationMedia?: InstallationMedia[];

  /**
   * <p>An optional pagination token provided by a previous
   *           <a>DescribeInstallationMedia</a> request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker,
   *           up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace InstallationMediaMessage {
  export const filterSensitiveLog = (obj: InstallationMediaMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstallationMediaMessage =>
    __isa(o, "InstallationMediaMessage");
}

/**
 * <p>
 *             <code>InstallationMediaID</code> doesn't refer to an existing installation medium.</p>
 */
export interface InstallationMediaNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InstallationMediaNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace InstallationMediaNotFoundFault {
  export const filterSensitiveLog = (
    obj: InstallationMediaNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstallationMediaNotFoundFault =>
    __isa(o, "InstallationMediaNotFoundFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 */
export interface InstanceQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InstanceQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace InstanceQuotaExceededFault {
  export const filterSensitiveLog = (obj: InstanceQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceQuotaExceededFault =>
    __isa(o, "InstanceQuotaExceededFault");
}

/**
 * <p>The DB cluster doesn't have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBClusterCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientDBClusterCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientDBClusterCapacityFault =>
    __isa(o, "InsufficientDBClusterCapacityFault");
}

/**
 * <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDBInstanceCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBInstanceCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientDBInstanceCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientDBInstanceCapacityFault =>
    __isa(o, "InsufficientDBInstanceCapacityFault");
}

/**
 * <p>There is insufficient storage available for the current action. You might be able to
 *             resolve this error by updating your subnet group to use different Availability Zones
 *             that have more storage available.</p>
 */
export interface InsufficientStorageClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientStorageClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientStorageClusterCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientStorageClusterCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientStorageClusterCapacityFault =>
    __isa(o, "InsufficientStorageClusterCapacityFault");
}

/**
 * <p>
 *             <code>Capacity</code> isn't a valid Aurora Serverless DB cluster
 *             capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>,
 *             <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
 */
export interface InvalidDBClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterCapacityFault {
  export const filterSensitiveLog = (
    obj: InvalidDBClusterCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBClusterCapacityFault =>
    __isa(o, "InvalidDBClusterCapacityFault");
}

/**
 * <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 */
export interface InvalidDBClusterEndpointStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterEndpointStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterEndpointStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBClusterEndpointStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBClusterEndpointStateFault =>
    __isa(o, "InvalidDBClusterEndpointStateFault");
}

/**
 * <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterSnapshotStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBClusterSnapshotStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBClusterSnapshotStateFault =>
    __isa(o, "InvalidDBClusterSnapshotStateFault");
}

/**
 * <p>The requested operation can't be performed while the cluster is in this state.</p>
 */
export interface InvalidDBClusterStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterStateFault {
  export const filterSensitiveLog = (obj: InvalidDBClusterStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBClusterStateFault =>
    __isa(o, "InvalidDBClusterStateFault");
}

/**
 * <p>The automated backup is in an invalid state.
 *     	    For example, this automated backup is associated with an active instance. </p>
 */
export interface InvalidDBInstanceAutomatedBackupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBInstanceAutomatedBackupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBInstanceAutomatedBackupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBInstanceAutomatedBackupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is InvalidDBInstanceAutomatedBackupStateFault =>
    __isa(o, "InvalidDBInstanceAutomatedBackupStateFault");
}

/**
 * <p>The DB instance isn't in a valid state.</p>
 */
export interface InvalidDBInstanceStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBInstanceStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBInstanceStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBInstanceStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBInstanceStateFault =>
    __isa(o, "InvalidDBInstanceStateFault");
}

/**
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting
 *             to delete the parameter group, you can't delete it when the parameter group is in
 *             this state.</p>
 */
export interface InvalidDBParameterGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBParameterGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBParameterGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBParameterGroupStateFault =>
    __isa(o, "InvalidDBParameterGroupStateFault");
}

/**
 * <p>The requested operation can't be performed while the proxy is in this state.</p>
 */
export interface InvalidDBProxyStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBProxyStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBProxyStateFault {
  export const filterSensitiveLog = (obj: InvalidDBProxyStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBProxyStateFault =>
    __isa(o, "InvalidDBProxyStateFault");
}

/**
 * <p>The state of the DB security group doesn't allow deletion.</p>
 */
export interface InvalidDBSecurityGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSecurityGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSecurityGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBSecurityGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSecurityGroupStateFault =>
    __isa(o, "InvalidDBSecurityGroupStateFault");
}

/**
 * <p>The state of the DB snapshot doesn't allow deletion.</p>
 */
export interface InvalidDBSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSnapshotStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBSnapshotStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSnapshotStateFault =>
    __isa(o, "InvalidDBSnapshotStateFault");
}

/**
 * <p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing
 *             cross-region read replica of the same source instance.</p>
 */
export interface InvalidDBSubnetGroupFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetGroupFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetGroupFault {
  export const filterSensitiveLog = (obj: InvalidDBSubnetGroupFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSubnetGroupFault =>
    __isa(o, "InvalidDBSubnetGroupFault");
}

/**
 * <p>The DB subnet group cannot be deleted because it's in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidDBSubnetGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSubnetGroupStateFault =>
    __isa(o, "InvalidDBSubnetGroupStateFault");
}

/**
 * <p>
 *             The DB subnet isn't in the <i>available</i> state.
 *         </p>
 */
export interface InvalidDBSubnetStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetStateFault {
  export const filterSensitiveLog = (obj: InvalidDBSubnetStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDBSubnetStateFault =>
    __isa(o, "InvalidDBSubnetStateFault");
}

/**
 * <p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>
 */
export interface InvalidEventSubscriptionStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEventSubscriptionStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidEventSubscriptionStateFault {
  export const filterSensitiveLog = (
    obj: InvalidEventSubscriptionStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidEventSubscriptionStateFault =>
    __isa(o, "InvalidEventSubscriptionStateFault");
}

/**
 * <p></p>
 */
export interface InvalidGlobalClusterStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidGlobalClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidGlobalClusterStateFault {
  export const filterSensitiveLog = (
    obj: InvalidGlobalClusterStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidGlobalClusterStateFault =>
    __isa(o, "InvalidGlobalClusterStateFault");
}

/**
 * <p>
 *             The option group isn't in the <i>available</i> state.
 *         </p>
 */
export interface InvalidOptionGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOptionGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidOptionGroupStateFault {
  export const filterSensitiveLog = (
    obj: InvalidOptionGroupStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidOptionGroupStateFault =>
    __isa(o, "InvalidOptionGroupStateFault");
}

/**
 * <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
 */
export interface InvalidRestoreFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreFault {
  export const filterSensitiveLog = (obj: InvalidRestoreFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRestoreFault =>
    __isa(o, "InvalidRestoreFault");
}

/**
 * <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't
 *             authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
 */
export interface InvalidS3BucketFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidS3BucketFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3BucketFault {
  export const filterSensitiveLog = (obj: InvalidS3BucketFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidS3BucketFault =>
    __isa(o, "InvalidS3BucketFault");
}

/**
 * <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubnet {
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidSubnet => __isa(o, "InvalidSubnet");
}

/**
 * <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  export const filterSensitiveLog = (
    obj: InvalidVPCNetworkStateFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidVPCNetworkStateFault =>
    __isa(o, "InvalidVPCNetworkStateFault");
}

/**
 * <p>
 *         This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.
 *         </p>
 */
export interface IPRange {
  __type?: "IPRange";
  /**
   * <p>Specifies the IP range.</p>
   */
  CIDRIP?: string;

  /**
   * <p>Specifies the status of the IP range. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   */
  Status?: string;
}

export namespace IPRange {
  export const filterSensitiveLog = (obj: IPRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is IPRange => __isa(o, "IPRange");
}

/**
 * <p>An error occurred accessing an AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  export const filterSensitiveLog = (obj: KMSKeyNotAccessibleFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is KMSKeyNotAccessibleFault =>
    __isa(o, "KMSKeyNotAccessibleFault");
}

export interface ListTagsForResourceMessage {
  __type?: "ListTagsForResourceMessage";
  Filters?: Filter[];
  ResourceName: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceMessage =>
    __isa(o, "ListTagsForResourceMessage");
}

export interface ModifyCertificatesMessage {
  __type?: "ModifyCertificatesMessage";
  /**
   * <p>The new default certificate identifier to override the current one with.</p>
   *          <p>To determine the valid values, use the <code>describe-certificates</code> AWS CLI
   *             command or the <code>DescribeCertificates</code> API operation.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>A value that indicates whether to remove the override for the default certificate.
   *             If the override is removed, the default certificate is the system
   *             default.</p>
   */
  RemoveCustomerOverride?: boolean;
}

export namespace ModifyCertificatesMessage {
  export const filterSensitiveLog = (obj: ModifyCertificatesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCertificatesMessage =>
    __isa(o, "ModifyCertificatesMessage");
}

export interface ModifyCertificatesResult {
  __type?: "ModifyCertificatesResult";
  /**
   * <p>A CA certificate for an AWS account.</p>
   */
  Certificate?: Certificate;
}

export namespace ModifyCertificatesResult {
  export const filterSensitiveLog = (obj: ModifyCertificatesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCertificatesResult =>
    __isa(o, "ModifyCertificatesResult");
}

export interface ModifyCurrentDBClusterCapacityMessage {
  __type?: "ModifyCurrentDBClusterCapacityMessage";
  /**
   * <p>The DB cluster capacity.</p>
   *         <p>When you change the capacity of a paused Aurora Serverless DB cluster, it automatically resumes.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *             </li>
   *          </ul>
   */
  Capacity?: number;

  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DB cluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The amount of time, in seconds, that Aurora Serverless tries to find a scaling point
   *             to perform seamless scaling before enforcing the timeout action. The default is
   *             300.</p>
   *         <ul>
   *             <li>
   *                 <p>Value must be from 10 through 600.</p>
   *             </li>
   *          </ul>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   */
  TimeoutAction?: string;
}

export namespace ModifyCurrentDBClusterCapacityMessage {
  export const filterSensitiveLog = (
    obj: ModifyCurrentDBClusterCapacityMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyCurrentDBClusterCapacityMessage =>
    __isa(o, "ModifyCurrentDBClusterCapacityMessage");
}

export interface ModifyDBClusterEndpointMessage {
  __type?: "ModifyDBClusterEndpointMessage";
  /**
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];
}

export namespace ModifyDBClusterEndpointMessage {
  export const filterSensitiveLog = (
    obj: ModifyDBClusterEndpointMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterEndpointMessage =>
    __isa(o, "ModifyDBClusterEndpointMessage");
}

/**
 * <p></p>
 */
export interface ModifyDBClusterMessage {
  __type?: "ModifyDBClusterMessage";
  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades when specifying a value for the
   *                 <code>EngineVersion</code> parameter that is a different major version than the DB
   *             cluster's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>A value that indicates whether the modifications in this request and
   *       any pending modifications are asynchronously applied
   *       as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB cluster.
   *       If this parameter is disabled, changes to the
   *       DB cluster are applied during the next maintenance window.</p>
   *          <p>The <code>ApplyImmediately</code> parameter only affects the <code>EnableIAMDatabaseAuthentication</code>,
   *       <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values. If the <code>ApplyImmediately</code>
   *       parameter is disabled, then changes to the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>,
   *       and <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are
   *       applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p>By default, this parameter is disabled.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *          <p>Constraints: This identifier must match the identifier of an existing DB
   *             cluster.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The name of the DB parameter group to apply to all instances of the DB cluster. </p>
   *          <note>
   *             <p>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB
   *                 cluster isn't rebooted automatically. Also, parameter changes aren't
   *                 applied during the next maintenance window but instead are applied immediately.</p>
   *          </note>
   *          <p>Default: The existing name setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The DB parameter group must be in the same DB parameter group family as this DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with
   *               the <code>AllowMajorVersionUpgrade</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint
   *             is disabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *             SQL queries on the Aurora Serverless DB cluster. You can also query your database
   *             from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *             Changing this parameter results in an outage. The change is applied during
   *             the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewDBClusterIdentifier?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.
   *             Changing this parameter doesn't result in an outage except in the following case, and the change
   *             is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> is enabled for this request. If the parameter change results in an option group that
   *             enables OEM, this change can cause a brief (sub-second) period during which new connections
   *             are rejected but existing connections are not interrupted.
   *         </p>
   *          <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled,
   *             using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyDBClusterMessage {
  export const filterSensitiveLog = (obj: ModifyDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterMessage =>
    __isa(o, "ModifyDBClusterMessage");
}

/**
 * <p></p>
 */
export interface ModifyDBClusterParameterGroupMessage {
  __type?: "ModifyDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterParameterGroupMessage =>
    __isa(o, "ModifyDBClusterParameterGroupMessage");
}

export interface ModifyDBClusterResult {
  __type?: "ModifyDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace ModifyDBClusterResult {
  export const filterSensitiveLog = (obj: ModifyDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterResult =>
    __isa(o, "ModifyDBClusterResult");
}

/**
 * <p></p>
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  __type?: "ModifyDBClusterSnapshotAttributeMessage";
  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *         <p>To manage authorization for other AWS accounts to copy or restore a manual DB cluster snapshot,
   *             set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account
   *             IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by
   *             any AWS account. Do not add the <code>all</code> value for any
   *             manual DB cluster snapshots that contain private information that you don't want available
   *             to all AWS accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To remove authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include
   *             one or more AWS account
   *             identifiers, or <code>all</code> to remove authorization for any AWS account to copy or
   *             restore the DB cluster snapshot. If you specify <code>all</code>, an AWS account whose account ID is
   *             explicitly added to the <code>restore</code> attribute
   *             can still copy or restore a manual DB cluster snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBClusterSnapshotAttributeMessage {
  export const filterSensitiveLog = (
    obj: ModifyDBClusterSnapshotAttributeMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterSnapshotAttributeMessage =>
    __isa(o, "ModifyDBClusterSnapshotAttributeMessage");
}

export interface ModifyDBClusterSnapshotAttributeResult {
  __type?: "ModifyDBClusterSnapshotAttributeResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace ModifyDBClusterSnapshotAttributeResult {
  export const filterSensitiveLog = (
    obj: ModifyDBClusterSnapshotAttributeResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBClusterSnapshotAttributeResult =>
    __isa(o, "ModifyDBClusterSnapshotAttributeResult");
}

export interface ModifyDBInstanceMessage {
  __type?: "ModifyDBInstanceMessage";
  AllocatedStorage?: number;
  AllowMajorVersionUpgrade?: boolean;
  ApplyImmediately?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  BackupRetentionPeriod?: number;
  DBInstanceClass?: string;
  DBInstanceIdentifier: string | undefined;
  DBParameterGroupName?: string;
  DBSecurityGroups?: string[];
  EngineVersion?: string;
  Iops?: number;
  MasterUserPassword?: string;
  MultiAZ?: boolean;
  NewDBInstanceIdentifier?: string;
  OptionGroupName?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyDBInstanceMessage {
  export const filterSensitiveLog = (obj: ModifyDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBInstanceMessage =>
    __isa(o, "ModifyDBInstanceMessage");
}

export interface ModifyDBInstanceResult {
  __type?: "ModifyDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace ModifyDBInstanceResult {
  export const filterSensitiveLog = (obj: ModifyDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBInstanceResult =>
    __isa(o, "ModifyDBInstanceResult");
}

export interface ModifyDBParameterGroupMessage {
  __type?: "ModifyDBParameterGroupMessage";
  DBParameterGroupName: string | undefined;
  Parameters: Parameter[] | undefined;
}

export namespace ModifyDBParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyDBParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBParameterGroupMessage =>
    __isa(o, "ModifyDBParameterGroupMessage");
}

export interface ModifyDBProxyRequest {
  __type?: "ModifyDBProxyRequest";
  /**
   * <p>The new authentication settings for the <code>DBProxy</code>.</p>
   */
  Auth?: UserAuthConfig[];

  /**
   * <p>The identifier for the <code>DBProxy</code> to modify.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>The new identifier for the <code>DBProxy</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewDBProxyName?: string;

  /**
   * <p>Whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't
   *         use TLS.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new list of security groups for the <code>DBProxy</code>.</p>
   */
  SecurityGroups?: string[];
}

export namespace ModifyDBProxyRequest {
  export const filterSensitiveLog = (obj: ModifyDBProxyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBProxyRequest =>
    __isa(o, "ModifyDBProxyRequest");
}

export interface ModifyDBProxyResponse {
  __type?: "ModifyDBProxyResponse";
  /**
   * <p>The <code>DBProxy</code> object representing the new settings for the proxy.</p>
   */
  DBProxy?: DBProxy;
}

export namespace ModifyDBProxyResponse {
  export const filterSensitiveLog = (obj: ModifyDBProxyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBProxyResponse =>
    __isa(o, "ModifyDBProxyResponse");
}

export interface ModifyDBProxyTargetGroupRequest {
  __type?: "ModifyDBProxyTargetGroupRequest";
  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   */
  ConnectionPoolConfig?: ConnectionPoolConfiguration;

  /**
   * <p>The name of the new proxy to which to assign the target group.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The new name for the modified <code>DBProxyTarget</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewName?: string;

  /**
   * <p>The name of the new target group to assign to the proxy.</p>
   */
  TargetGroupName: string | undefined;
}

export namespace ModifyDBProxyTargetGroupRequest {
  export const filterSensitiveLog = (
    obj: ModifyDBProxyTargetGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBProxyTargetGroupRequest =>
    __isa(o, "ModifyDBProxyTargetGroupRequest");
}

export interface ModifyDBProxyTargetGroupResponse {
  __type?: "ModifyDBProxyTargetGroupResponse";
  /**
   * <p>The settings of the modified <code>DBProxyTarget</code>.</p>
   */
  DBProxyTargetGroup?: DBProxyTargetGroup;
}

export namespace ModifyDBProxyTargetGroupResponse {
  export const filterSensitiveLog = (
    obj: ModifyDBProxyTargetGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBProxyTargetGroupResponse =>
    __isa(o, "ModifyDBProxyTargetGroupResponse");
}

/**
 * <p></p>
 */
export interface ModifyDBSnapshotAttributeMessage {
  __type?: "ModifyDBSnapshotAttributeMessage";
  /**
   * <p>The name of the DB snapshot attribute to modify.</p>
   *          <p>To manage authorization for other AWS accounts to copy or restore a manual DB snapshot,
   *       set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The identifier for the DB snapshot to modify the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of DB snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To authorize other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account
   *       IDs, or <code>all</code> to make the manual DB snapshot restorable by
   *       any AWS account. Do not add the <code>all</code> value for any
   *       manual DB snapshots that contain private information that you don't want available
   *       to all AWS accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of DB snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other AWS accounts to copy or restore a manual snapshot, set this list to include
   *       one or more AWS account
   *       identifiers, or <code>all</code> to remove authorization for any AWS account to copy or
   *       restore the DB snapshot. If you specify <code>all</code>, an AWS account whose
   *       account ID is explicitly added to the <code>restore</code> attribute
   *       can still copy or restore the manual DB snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBSnapshotAttributeMessage {
  export const filterSensitiveLog = (
    obj: ModifyDBSnapshotAttributeMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSnapshotAttributeMessage =>
    __isa(o, "ModifyDBSnapshotAttributeMessage");
}

export interface ModifyDBSnapshotAttributeResult {
  __type?: "ModifyDBSnapshotAttributeResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace ModifyDBSnapshotAttributeResult {
  export const filterSensitiveLog = (
    obj: ModifyDBSnapshotAttributeResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSnapshotAttributeResult =>
    __isa(o, "ModifyDBSnapshotAttributeResult");
}

export interface ModifyDBSnapshotMessage {
  __type?: "ModifyDBSnapshotMessage";
  /**
   * <p>The identifier of the DB snapshot to modify.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The engine version to upgrade the DB snapshot to.
   *       </p>
   *
   *          <p>The following are the database engines and engine versions that are available when you upgrade a DB snapshot.
   *       </p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>5.5.46</code> (supported for 5.1 DB snapshots)</p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>12.1.0.2.v8</code>  (supported for 12.1.0.1 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v12</code> (supported for 11.2.0.2 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v11</code> (supported for 11.2.0.3 DB snapshots)</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>For the list of engine versions that are available for upgrading a DB snapshot, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html#USER_UpgradeDBInstance.PostgreSQL.MajorVersion">
   *               Upgrading the PostgreSQL DB Engine for Amazon RDS</a>.
   *       </p>
   */
  EngineVersion?: string;

  /**
   * <p>The option group to identify with the upgraded DB snapshot.
   *         </p>
   *
   *         <p>You can specify this parameter when you upgrade an Oracle DB snapshot.
   *             The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.
   *             For more information, see
   *             <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG">Option Group Considerations</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  OptionGroupName?: string;
}

export namespace ModifyDBSnapshotMessage {
  export const filterSensitiveLog = (obj: ModifyDBSnapshotMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSnapshotMessage =>
    __isa(o, "ModifyDBSnapshotMessage");
}

export interface ModifyDBSnapshotResult {
  __type?: "ModifyDBSnapshotResult";
  DBSnapshot?: DBSnapshot;
}

export namespace ModifyDBSnapshotResult {
  export const filterSensitiveLog = (obj: ModifyDBSnapshotResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSnapshotResult =>
    __isa(o, "ModifyDBSnapshotResult");
}

/**
 * <p></p>
 */
export interface ModifyDBSubnetGroupMessage {
  __type?: "ModifyDBSubnetGroupMessage";
  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.
   *           You can't modify the default subnet group.
   *       </p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The EC2 subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyDBSubnetGroupMessage {
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSubnetGroupMessage =>
    __isa(o, "ModifyDBSubnetGroupMessage");
}

export interface ModifyDBSubnetGroupResult {
  __type?: "ModifyDBSubnetGroupResult";
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace ModifyDBSubnetGroupResult {
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyDBSubnetGroupResult =>
    __isa(o, "ModifyDBSubnetGroupResult");
}

export interface ModifyEventSubscriptionMessage {
  __type?: "ModifyEventSubscriptionMessage";
  Enabled?: boolean;
  EventCategories?: string[];
  SnsTopicArn?: string;
  SourceType?: string;
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

export interface ModifyEventSubscriptionResult {
  __type?: "ModifyEventSubscriptionResult";
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  export const filterSensitiveLog = (
    obj: ModifyEventSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyEventSubscriptionResult =>
    __isa(o, "ModifyEventSubscriptionResult");
}

export interface ModifyGlobalClusterMessage {
  __type?: "ModifyGlobalClusterMessage";
  /**
   * <p>
   *         Indicates if the global database cluster has deletion protection enabled. The global database cluster
   *         can't be deleted when deletion protection is enabled.
   *       </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>
   *         The DB cluster identifier for the global cluster being modified. This parameter isn't case-sensitive.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global database cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The new cluster identifier for the global database cluster when modifying a global database cluster.
   *         This value is stored as a lowercase string.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewGlobalClusterIdentifier?: string;
}

export namespace ModifyGlobalClusterMessage {
  export const filterSensitiveLog = (obj: ModifyGlobalClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyGlobalClusterMessage =>
    __isa(o, "ModifyGlobalClusterMessage");
}

export interface ModifyGlobalClusterResult {
  __type?: "ModifyGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace ModifyGlobalClusterResult {
  export const filterSensitiveLog = (obj: ModifyGlobalClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyGlobalClusterResult =>
    __isa(o, "ModifyGlobalClusterResult");
}

export interface ModifyOptionGroupMessage {
  __type?: "ModifyOptionGroupMessage";
  ApplyImmediately?: boolean;
  OptionGroupName: string | undefined;
  OptionsToInclude?: OptionConfiguration[];
  OptionsToRemove?: string[];
}

export namespace ModifyOptionGroupMessage {
  export const filterSensitiveLog = (obj: ModifyOptionGroupMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyOptionGroupMessage =>
    __isa(o, "ModifyOptionGroupMessage");
}

export interface ModifyOptionGroupResult {
  __type?: "ModifyOptionGroupResult";
  OptionGroup?: OptionGroup;
}

export namespace ModifyOptionGroupResult {
  export const filterSensitiveLog = (obj: ModifyOptionGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyOptionGroupResult =>
    __isa(o, "ModifyOptionGroupResult");
}

export interface Option {
  __type?: "Option";
  DBSecurityGroupMemberships?: DBSecurityGroupMembership[];
  OptionDescription?: string;
  OptionName?: string;
  OptionSettings?: OptionSetting[];
  Permanent?: boolean;
  Persistent?: boolean;
  Port?: number;
  VpcSecurityGroupMemberships?: VpcSecurityGroupMembership[];
}

export namespace Option {
  export const filterSensitiveLog = (obj: Option): any => ({
    ...obj
  });
  export const isa = (o: any): o is Option => __isa(o, "Option");
}

export interface OptionConfiguration {
  __type?: "OptionConfiguration";
  DBSecurityGroupMemberships?: string[];
  OptionName: string | undefined;
  OptionSettings?: OptionSetting[];
  Port?: number;
  VpcSecurityGroupMemberships?: string[];
}

export namespace OptionConfiguration {
  export const filterSensitiveLog = (obj: OptionConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionConfiguration =>
    __isa(o, "OptionConfiguration");
}

export interface OptionGroup {
  __type?: "OptionGroup";
  AllowsVpcAndNonVpcInstanceMemberships?: boolean;
  EngineName?: string;
  MajorEngineVersion?: string;
  OptionGroupDescription?: string;
  OptionGroupName?: string;
  Options?: Option[];
  VpcId?: string;
}

export namespace OptionGroup {
  export const filterSensitiveLog = (obj: OptionGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroup => __isa(o, "OptionGroup");
}

/**
 * <p>The option group you are trying to create already exists.</p>
 */
export interface OptionGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "OptionGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace OptionGroupAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: OptionGroupAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroupAlreadyExistsFault =>
    __isa(o, "OptionGroupAlreadyExistsFault");
}

export interface OptionGroupMembership {
  __type?: "OptionGroupMembership";
  OptionGroupName?: string;
  Status?: string;
}

export namespace OptionGroupMembership {
  export const filterSensitiveLog = (obj: OptionGroupMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroupMembership =>
    __isa(o, "OptionGroupMembership");
}

/**
 * <p>The specified option group could not be found.</p>
 */
export interface OptionGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "OptionGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace OptionGroupNotFoundFault {
  export const filterSensitiveLog = (obj: OptionGroupNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroupNotFoundFault =>
    __isa(o, "OptionGroupNotFoundFault");
}

export interface OptionGroupOption {
  __type?: "OptionGroupOption";
  DefaultPort?: number;
  Description?: string;
  EngineName?: string;
  MajorEngineVersion?: string;
  MinimumRequiredMinorEngineVersion?: string;
  Name?: string;
  OptionGroupOptionSettings?: OptionGroupOptionSetting[];
  OptionsDependedOn?: string[];
  Permanent?: boolean;
  Persistent?: boolean;
  PortRequired?: boolean;
}

export namespace OptionGroupOption {
  export const filterSensitiveLog = (obj: OptionGroupOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroupOption =>
    __isa(o, "OptionGroupOption");
}

export interface OptionGroupOptionSetting {
  __type?: "OptionGroupOptionSetting";
  AllowedValues?: string;
  ApplyType?: string;
  DefaultValue?: string;
  IsModifiable?: boolean;
  SettingDescription?: string;
  SettingName?: string;
}

export namespace OptionGroupOptionSetting {
  export const filterSensitiveLog = (obj: OptionGroupOptionSetting): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroupOptionSetting =>
    __isa(o, "OptionGroupOptionSetting");
}

export interface OptionGroupOptionsMessage {
  __type?: "OptionGroupOptionsMessage";
  Marker?: string;
  OptionGroupOptions?: OptionGroupOption[];
}

export namespace OptionGroupOptionsMessage {
  export const filterSensitiveLog = (obj: OptionGroupOptionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroupOptionsMessage =>
    __isa(o, "OptionGroupOptionsMessage");
}

/**
 * <p>The quota of 20 option groups was exceeded for this AWS account.</p>
 */
export interface OptionGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "OptionGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace OptionGroupQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: OptionGroupQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroupQuotaExceededFault =>
    __isa(o, "OptionGroupQuotaExceededFault");
}

export interface OptionGroups {
  __type?: "OptionGroups";
  Marker?: string;
  OptionGroupsList?: OptionGroup[];
}

export namespace OptionGroups {
  export const filterSensitiveLog = (obj: OptionGroups): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionGroups => __isa(o, "OptionGroups");
}

/**
 * <p>Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.</p>
 */
export interface OptionSetting {
  __type?: "OptionSetting";
  /**
   * <p>The allowed values of the option setting.</p>
   */
  AllowedValues?: string;

  /**
   * <p>The DB engine specific parameter type.</p>
   */
  ApplyType?: string;

  /**
   * <p>The data type of the option setting.</p>
   */
  DataType?: string;

  /**
   * <p>The default value of the option setting.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The description of the option setting.</p>
   */
  Description?: string;

  /**
   * <p>Indicates if the option setting is part of a collection.</p>
   */
  IsCollection?: boolean;

  /**
   * <p>A Boolean value that, when true, indicates the option setting can be modified from the default.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The name of the option that has settings that you can set.</p>
   */
  Name?: string;

  /**
   * <p>The current value of the option setting.</p>
   */
  Value?: string;
}

export namespace OptionSetting {
  export const filterSensitiveLog = (obj: OptionSetting): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionSetting => __isa(o, "OptionSetting");
}

export interface OrderableDBInstanceOption {
  __type?: "OrderableDBInstanceOption";
  AvailabilityZones?: AvailabilityZone[];
  DBInstanceClass?: string;
  Engine?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  MultiAZCapable?: boolean;
  ReadReplicaCapable?: boolean;
  Vpc?: boolean;
}

export namespace OrderableDBInstanceOption {
  export const filterSensitiveLog = (obj: OrderableDBInstanceOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderableDBInstanceOption =>
    __isa(o, "OrderableDBInstanceOption");
}

export interface OrderableDBInstanceOptionsMessage {
  __type?: "OrderableDBInstanceOptionsMessage";
  Marker?: string;
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];
}

export namespace OrderableDBInstanceOptionsMessage {
  export const filterSensitiveLog = (
    obj: OrderableDBInstanceOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderableDBInstanceOptionsMessage =>
    __isa(o, "OrderableDBInstanceOptionsMessage");
}

export interface Parameter {
  __type?: "Parameter";
  AllowedValues?: string;
  ApplyMethod?: ApplyMethod | string;
  ApplyType?: string;
  DataType?: string;
  Description?: string;
  IsModifiable?: boolean;
  MinimumEngineVersion?: string;
  ParameterName?: string;
  ParameterValue?: string;
  Source?: string;
}

export namespace Parameter {
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parameter => __isa(o, "Parameter");
}

/**
 * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  __type?: "PendingCloudwatchLogsExports";
  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.</p>
   */
  LogTypesToDisable?: string[];

  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: string[];
}

export namespace PendingCloudwatchLogsExports {
  export const filterSensitiveLog = (
    obj: PendingCloudwatchLogsExports
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingCloudwatchLogsExports =>
    __isa(o, "PendingCloudwatchLogsExports");
}

/**
 * <p>Provides information about a pending maintenance action for a resource.</p>
 */
export interface PendingMaintenanceAction {
  __type?: "PendingMaintenanceAction";
  /**
   * <p>The type of pending maintenance action that is available for the resource.
   *           Valid actions are <code>system-update</code>, <code>db-upgrade</code>, <code>hardware-maintenance</code>,
   *           and <code>ca-certificate-rotation</code>.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action is applied.
   *            The maintenance action is applied to the resource during
   *            its first maintenance window after this date.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The effective date when the pending maintenance action is applied
   *            to the resource. This date takes into account opt-in requests received from
   *            the <code>ApplyPendingMaintenanceAction</code> API, the <code>AutoAppliedAfterDate</code>,
   *            and the <code>ForcedApplyDate</code>. This value is blank if an
   *            opt-in request has not been received and nothing has been specified as
   *            <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;

  /**
   * <p>The date when the maintenance action is automatically applied.
   *             The maintenance action is applied to the resource on this date
   *             regardless of the maintenance window for the resource.</p>
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

/**
 * <p>Data returned from the <b>DescribePendingMaintenanceActions</b> action.</p>
 */
export interface PendingMaintenanceActionsMessage {
  __type?: "PendingMaintenanceActionsMessage";
  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}

export namespace PendingMaintenanceActionsMessage {
  export const filterSensitiveLog = (
    obj: PendingMaintenanceActionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingMaintenanceActionsMessage =>
    __isa(o, "PendingMaintenanceActionsMessage");
}

/**
 * <p>
 *         This data type is used as a response element in the <code>ModifyDBInstance</code> action.
 *         </p>
 */
export interface PendingModifiedValues {
  __type?: "PendingModifiedValues";
  /**
   * <p>
   *         Contains the new <code>AllocatedStorage</code> size for the DB instance
   *           that will be applied or is currently being applied.
   *         </p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Specifies the identifier of the CA certificate for the DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>
   *         Contains the new <code>DBInstanceClass</code> for the DB instance
   *           that will be applied or is currently being applied.
   *         </p>
   */
  DBInstanceClass?: string;

  /**
   * <p>
   *             Contains the new <code>DBInstanceIdentifier</code> for the DB instance
   *             that will be applied or is currently being applied.
   *         </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The new DB subnet group for the DB instance.
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is currently being applied.</p>
   */
  Iops?: number;

  /**
   * <p>The license model for the DB instance.</p>
   *         <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *             <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>Contains the pending or currently-in-progress change of the master credentials for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * <p>Specifies the pending port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class
   *             of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   */
  StorageType?: string;
}

export namespace PendingModifiedValues {
  export const filterSensitiveLog = (obj: PendingModifiedValues): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingModifiedValues =>
    __isa(o, "PendingModifiedValues");
}

/**
 * <p>
 *             <code>SourceDBInstanceIdentifier</code>
 *         refers to a DB instance with
 *         <code>BackupRetentionPeriod</code> equal to 0.
 *         </p>
 */
export interface PointInTimeRestoreNotEnabledFault
  extends __SmithyException,
    $MetadataBearer {
  name: "PointInTimeRestoreNotEnabledFault";
  $fault: "client";
  message?: string;
}

export namespace PointInTimeRestoreNotEnabledFault {
  export const filterSensitiveLog = (
    obj: PointInTimeRestoreNotEnabledFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PointInTimeRestoreNotEnabledFault =>
    __isa(o, "PointInTimeRestoreNotEnabledFault");
}

/**
 * <p>Contains the processor features of a DB instance class.</p>
 *         <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name
 *             for the <code>Name</code> parameter. To specify the number of threads per core, use the
 *             <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p>
 *         <p>You can set the processor features of the DB instance class for a DB instance when you
 *             call one of the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromS3</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>You can view the valid processor values for a particular instance class by calling the
 *                 <code>DescribeOrderableDBInstanceOptions</code> action and specifying the
 *             instance class for the <code>DBInstanceClass</code> parameter.</p>
 *         <p>In addition, you can use the following actions for DB instance class processor information:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBSnapshots</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeValidDBInstanceModifications</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the
 *                 Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 */
export interface ProcessorFeature {
  __type?: "ProcessorFeature";
  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of a processor feature name.</p>
   */
  Value?: string;
}

export namespace ProcessorFeature {
  export const filterSensitiveLog = (obj: ProcessorFeature): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessorFeature =>
    __isa(o, "ProcessorFeature");
}

/**
 * <p></p>
 */
export interface PromoteReadReplicaDBClusterMessage {
  __type?: "PromoteReadReplicaDBClusterMessage";
  /**
   * <p>The identifier of the DB cluster Read Replica to promote.
   *       This parameter isn't case-sensitive.
   *     </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster Read Replica.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-replica1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace PromoteReadReplicaDBClusterMessage {
  export const filterSensitiveLog = (
    obj: PromoteReadReplicaDBClusterMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PromoteReadReplicaDBClusterMessage =>
    __isa(o, "PromoteReadReplicaDBClusterMessage");
}

export interface PromoteReadReplicaDBClusterResult {
  __type?: "PromoteReadReplicaDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace PromoteReadReplicaDBClusterResult {
  export const filterSensitiveLog = (
    obj: PromoteReadReplicaDBClusterResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PromoteReadReplicaDBClusterResult =>
    __isa(o, "PromoteReadReplicaDBClusterResult");
}

export interface PromoteReadReplicaMessage {
  __type?: "PromoteReadReplicaMessage";
  BackupRetentionPeriod?: number;
  DBInstanceIdentifier: string | undefined;
  PreferredBackupWindow?: string;
}

export namespace PromoteReadReplicaMessage {
  export const filterSensitiveLog = (obj: PromoteReadReplicaMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is PromoteReadReplicaMessage =>
    __isa(o, "PromoteReadReplicaMessage");
}

export interface PromoteReadReplicaResult {
  __type?: "PromoteReadReplicaResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace PromoteReadReplicaResult {
  export const filterSensitiveLog = (obj: PromoteReadReplicaResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is PromoteReadReplicaResult =>
    __isa(o, "PromoteReadReplicaResult");
}

/**
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 */
export interface ProvisionedIopsNotAvailableInAZFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ProvisionedIopsNotAvailableInAZFault";
  $fault: "client";
  message?: string;
}

export namespace ProvisionedIopsNotAvailableInAZFault {
  export const filterSensitiveLog = (
    obj: ProvisionedIopsNotAvailableInAZFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProvisionedIopsNotAvailableInAZFault =>
    __isa(o, "ProvisionedIopsNotAvailableInAZFault");
}

export interface PurchaseReservedDBInstancesOfferingMessage {
  __type?: "PurchaseReservedDBInstancesOfferingMessage";
  DBInstanceCount?: number;
  ReservedDBInstanceId?: string;
  ReservedDBInstancesOfferingId: string | undefined;
  Tags?: Tag[];
}

export namespace PurchaseReservedDBInstancesOfferingMessage {
  export const filterSensitiveLog = (
    obj: PurchaseReservedDBInstancesOfferingMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is PurchaseReservedDBInstancesOfferingMessage =>
    __isa(o, "PurchaseReservedDBInstancesOfferingMessage");
}

export interface PurchaseReservedDBInstancesOfferingResult {
  __type?: "PurchaseReservedDBInstancesOfferingResult";
  ReservedDBInstance?: ReservedDBInstance;
}

export namespace PurchaseReservedDBInstancesOfferingResult {
  export const filterSensitiveLog = (
    obj: PurchaseReservedDBInstancesOfferingResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PurchaseReservedDBInstancesOfferingResult =>
    __isa(o, "PurchaseReservedDBInstancesOfferingResult");
}

/**
 * <p>A range of integer values.</p>
 */
export interface Range {
  __type?: "Range";
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The step value for the range.
   *             For example, if you have a range of 5,000 to 10,000,
   *             with a step value of 1,000,
   *             the valid values start at 5,000 and step up by 1,000.
   *             Even though 7,500 is within the range,
   *             it isn't a valid value for the range.
   *             The valid values are 5,000, 6,000, 7,000, 8,000...
   *         </p>
   */
  Step?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

export namespace Range {
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj
  });
  export const isa = (o: any): o is Range => __isa(o, "Range");
}

export interface RebootDBInstanceMessage {
  __type?: "RebootDBInstanceMessage";
  DBInstanceIdentifier: string | undefined;
  ForceFailover?: boolean;
}

export namespace RebootDBInstanceMessage {
  export const filterSensitiveLog = (obj: RebootDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootDBInstanceMessage =>
    __isa(o, "RebootDBInstanceMessage");
}

export interface RebootDBInstanceResult {
  __type?: "RebootDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RebootDBInstanceResult {
  export const filterSensitiveLog = (obj: RebootDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootDBInstanceResult =>
    __isa(o, "RebootDBInstanceResult");
}

export interface RecurringCharge {
  __type?: "RecurringCharge";
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}

export namespace RecurringCharge {
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecurringCharge =>
    __isa(o, "RecurringCharge");
}

export interface RegisterDBProxyTargetsRequest {
  __type?: "RegisterDBProxyTargetsRequest";
  /**
   * <p>One or more DB cluster identifiers.</p>
   */
  DBClusterIdentifiers?: string[];

  /**
   * <p>One or more DB instance identifiers.</p>
   */
  DBInstanceIdentifiers?: string[];

  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   */
  TargetGroupName?: string;
}

export namespace RegisterDBProxyTargetsRequest {
  export const filterSensitiveLog = (
    obj: RegisterDBProxyTargetsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterDBProxyTargetsRequest =>
    __isa(o, "RegisterDBProxyTargetsRequest");
}

export interface RegisterDBProxyTargetsResponse {
  __type?: "RegisterDBProxyTargetsResponse";
  /**
   * <p>One or more <code>DBProxyTarget</code> objects that are created when you register targets with a target group.</p>
   */
  DBProxyTargets?: DBProxyTarget[];
}

export namespace RegisterDBProxyTargetsResponse {
  export const filterSensitiveLog = (
    obj: RegisterDBProxyTargetsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterDBProxyTargetsResponse =>
    __isa(o, "RegisterDBProxyTargetsResponse");
}

export interface RemoveFromGlobalClusterMessage {
  __type?: "RemoveFromGlobalClusterMessage";
  /**
   * <p>
   *         The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster.
   *       </p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>
   *         The cluster identifier to detach from the Aurora global database cluster.
   *       </p>
   */
  GlobalClusterIdentifier?: string;
}

export namespace RemoveFromGlobalClusterMessage {
  export const filterSensitiveLog = (
    obj: RemoveFromGlobalClusterMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveFromGlobalClusterMessage =>
    __isa(o, "RemoveFromGlobalClusterMessage");
}

export interface RemoveFromGlobalClusterResult {
  __type?: "RemoveFromGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace RemoveFromGlobalClusterResult {
  export const filterSensitiveLog = (
    obj: RemoveFromGlobalClusterResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveFromGlobalClusterResult =>
    __isa(o, "RemoveFromGlobalClusterResult");
}

export interface RemoveRoleFromDBClusterMessage {
  __type?: "RemoveRoleFromDBClusterMessage";
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example
   *         <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace RemoveRoleFromDBClusterMessage {
  export const filterSensitiveLog = (
    obj: RemoveRoleFromDBClusterMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveRoleFromDBClusterMessage =>
    __isa(o, "RemoveRoleFromDBClusterMessage");
}

export interface RemoveRoleFromDBInstanceMessage {
  __type?: "RemoveRoleFromDBInstanceMessage";
  /**
   * <p>The name of the DB instance to disassociate the IAM role from.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be disassociated from.
   *             For the list of supported feature names, see <code>DBEngineVersion</code>.
   *         </p>
   */
  FeatureName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance,
   *             for example <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace RemoveRoleFromDBInstanceMessage {
  export const filterSensitiveLog = (
    obj: RemoveRoleFromDBInstanceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveRoleFromDBInstanceMessage =>
    __isa(o, "RemoveRoleFromDBInstanceMessage");
}

export interface RemoveSourceIdentifierFromSubscriptionMessage {
  __type?: "RemoveSourceIdentifierFromSubscriptionMessage";
  SourceIdentifier: string | undefined;
  SubscriptionName: string | undefined;
}

export namespace RemoveSourceIdentifierFromSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: RemoveSourceIdentifierFromSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RemoveSourceIdentifierFromSubscriptionMessage =>
    __isa(o, "RemoveSourceIdentifierFromSubscriptionMessage");
}

export interface RemoveSourceIdentifierFromSubscriptionResult {
  __type?: "RemoveSourceIdentifierFromSubscriptionResult";
  EventSubscription?: EventSubscription;
}

export namespace RemoveSourceIdentifierFromSubscriptionResult {
  export const filterSensitiveLog = (
    obj: RemoveSourceIdentifierFromSubscriptionResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is RemoveSourceIdentifierFromSubscriptionResult =>
    __isa(o, "RemoveSourceIdentifierFromSubscriptionResult");
}

export interface RemoveTagsFromResourceMessage {
  __type?: "RemoveTagsFromResourceMessage";
  ResourceName: string | undefined;
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

export interface ReservedDBInstance {
  __type?: "ReservedDBInstance";
  CurrencyCode?: string;
  DBInstanceClass?: string;
  DBInstanceCount?: number;
  Duration?: number;
  FixedPrice?: number;
  MultiAZ?: boolean;
  OfferingType?: string;
  ProductDescription?: string;
  RecurringCharges?: RecurringCharge[];
  ReservedDBInstanceId?: string;
  ReservedDBInstancesOfferingId?: string;
  StartTime?: Date;
  State?: string;
  UsagePrice?: number;
}

export namespace ReservedDBInstance {
  export const filterSensitiveLog = (obj: ReservedDBInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstance =>
    __isa(o, "ReservedDBInstance");
}

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export interface ReservedDBInstanceAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstanceAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceAlreadyExistsFault {
  export const filterSensitiveLog = (
    obj: ReservedDBInstanceAlreadyExistsFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstanceAlreadyExistsFault =>
    __isa(o, "ReservedDBInstanceAlreadyExistsFault");
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.
 *         </p>
 */
export interface ReservedDBInstanceMessage {
  __type?: "ReservedDBInstanceMessage";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved DB instances.</p>
   */
  ReservedDBInstances?: ReservedDBInstance[];
}

export namespace ReservedDBInstanceMessage {
  export const filterSensitiveLog = (obj: ReservedDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstanceMessage =>
    __isa(o, "ReservedDBInstanceMessage");
}

/**
 * <p>The specified reserved DB Instance not found.</p>
 */
export interface ReservedDBInstanceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstanceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceNotFoundFault {
  export const filterSensitiveLog = (
    obj: ReservedDBInstanceNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstanceNotFoundFault =>
    __isa(o, "ReservedDBInstanceNotFoundFault");
}

/**
 * <p>Request would exceed the user's DB Instance quota.</p>
 */
export interface ReservedDBInstanceQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstanceQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: ReservedDBInstanceQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstanceQuotaExceededFault =>
    __isa(o, "ReservedDBInstanceQuotaExceededFault");
}

export interface ReservedDBInstancesOffering {
  __type?: "ReservedDBInstancesOffering";
  CurrencyCode?: string;
  DBInstanceClass?: string;
  Duration?: number;
  FixedPrice?: number;
  MultiAZ?: boolean;
  OfferingType?: string;
  ProductDescription?: string;
  RecurringCharges?: RecurringCharge[];
  ReservedDBInstancesOfferingId?: string;
  UsagePrice?: number;
}

export namespace ReservedDBInstancesOffering {
  export const filterSensitiveLog = (
    obj: ReservedDBInstancesOffering
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstancesOffering =>
    __isa(o, "ReservedDBInstancesOffering");
}

export interface ReservedDBInstancesOfferingMessage {
  __type?: "ReservedDBInstancesOfferingMessage";
  Marker?: string;
  ReservedDBInstancesOfferings?: ReservedDBInstancesOffering[];
}

export namespace ReservedDBInstancesOfferingMessage {
  export const filterSensitiveLog = (
    obj: ReservedDBInstancesOfferingMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstancesOfferingMessage =>
    __isa(o, "ReservedDBInstancesOfferingMessage");
}

/**
 * <p>Specified offering does not exist.</p>
 */
export interface ReservedDBInstancesOfferingNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstancesOfferingNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstancesOfferingNotFoundFault {
  export const filterSensitiveLog = (
    obj: ReservedDBInstancesOfferingNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservedDBInstancesOfferingNotFoundFault =>
    __isa(o, "ReservedDBInstancesOfferingNotFoundFault");
}

/**
 * <p></p>
 */
export interface ResetDBClusterParameterGroupMessage {
  __type?: "ResetDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this
   *         parameter if the <code>ResetAllParameters</code> parameter is enabled.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>A value that indicates whether to reset all parameters in the DB cluster parameter group
   *         to their default values. You can't use this parameter if there
   *         is a list of parameter names specified for the <code>Parameters</code> parameter.</p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetDBClusterParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ResetDBClusterParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetDBClusterParameterGroupMessage =>
    __isa(o, "ResetDBClusterParameterGroupMessage");
}

export interface ResetDBParameterGroupMessage {
  __type?: "ResetDBParameterGroupMessage";
  DBParameterGroupName: string | undefined;
  Parameters?: Parameter[];
  ResetAllParameters?: boolean;
}

export namespace ResetDBParameterGroupMessage {
  export const filterSensitiveLog = (
    obj: ResetDBParameterGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetDBParameterGroupMessage =>
    __isa(o, "ResetDBParameterGroupMessage");
}

/**
 * <p>The specified resource ID was not found.</p>
 */
export interface ResourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
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
 * <p>Describes the pending maintenance actions for a resource.</p>
 */
export interface ResourcePendingMaintenanceActions {
  __type?: "ResourcePendingMaintenanceActions";
  /**
   * <p>A list that provides details about the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  /**
   * <p>The ARN of the resource that has pending maintenance actions.</p>
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

export interface RestoreDBClusterFromS3Message {
  __type?: "RestoreDBClusterFromS3Message";
  /**
   * <p>A list of Availability Zones (AZs) where instances in the restored DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter is isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate
   *             with the restored DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used.
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A DB subnet group to associate with the restored DB cluster.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *         </p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the database engine to be used for the restored DB cluster.</p>
   *         <p>Valid Values: <code>aurora</code>, <code>aurora-postgresql</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *         </p>
   *         <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *         </p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *         </p>
   *         <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p>
   *         <p>If the StorageEncrypted parameter is enabled, and you do
   *             not specify a value for the <code>KmsKeyId</code> parameter, then
   *             Amazon RDS will use your default encryption key. AWS KMS creates the
   *             default encryption key for your AWS account. Your AWS account has a different
   *             default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword: string | undefined;

  /**
   * <p>The name of the master user for the restored DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified option group.</p>
   *         <p>Permanent options can't be removed from an option group. An option group can't be removed from a
   *             DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the instances in the restored DB cluster accept connections.</p>
   *         <p>
   *             Default: <code>3306</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled
   *             using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *         <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes
   *         Amazon RDS to access the Amazon S3 bucket on your behalf.</p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster.
   *         If you do not specify a <b>SourceS3Prefix</b> value, then the Amazon Aurora DB cluster is
   *         created by using all of the files in the Amazon S3 bucket.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The identifier for the database engine that was backed up to create the files stored in the
   *             Amazon S3 bucket.
   *         </p>
   *         <p>Valid values: <code>mysql</code>
   *          </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *         <p>MySQL version 5.5 and 5.6 are supported.
   *         </p>
   *         <p>Example: <code>5.6.22</code>
   *          </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>A value that indicates whether the restored DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  Tags?: Tag[];
  /**
   * <p>A list of EC2 VPC security groups to associate with the restored DB cluster.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace RestoreDBClusterFromS3Message {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterFromS3Message
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterFromS3Message =>
    __isa(o, "RestoreDBClusterFromS3Message");
}

export interface RestoreDBClusterFromS3Result {
  __type?: "RestoreDBClusterFromS3Result";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromS3Result {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterFromS3Result
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterFromS3Result =>
    __isa(o, "RestoreDBClusterFromS3Result");
}

/**
 * <p></p>
 */
export interface RestoreDBClusterFromSnapshotMessage {
  __type?: "RestoreDBClusterFromSnapshotMessage";
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the restored DB
   *             cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot.
   *             This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster. If this
   *             argument is omitted, the default DB cluster parameter group for the specified engine is
   *             used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DB subnet group.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
   *             The values in the list depend on the DB engine being used. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon
   *                 Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   */
  Engine: string | undefined;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   */
  EngineMode?: string;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   *          <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <note>
   *             <p>If you aren't using the default engine version, then you must specify the engine version.</p>
   *          </note>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *             snapshot or DB cluster snapshot.</p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
   *             key. If you are restoring a DB cluster with the same AWS account that owns the KMS
   *             encryption key used to encrypt the new DB cluster, then you can use the KMS key alias
   *             instead of the ARN for the KMS encryption key.</p>
   *         <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                         <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster
   *                     is encrypted using the KMS key that was used to encrypt the DB snapshot or DB
   *                     cluster snapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                     <code>SnapshotIdentifier</code> isn't encrypted, then the restored DB cluster
   *                     isn't encrypted.</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the option group to use for the restored DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: This value must be <code>1150-65535</code>
   *         </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *         <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB
   *             cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Snapshot.</p>
   *             </li>
   *          </ul>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace RestoreDBClusterFromSnapshotMessage {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterFromSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterFromSnapshotMessage =>
    __isa(o, "RestoreDBClusterFromSnapshotMessage");
}

export interface RestoreDBClusterFromSnapshotResult {
  __type?: "RestoreDBClusterFromSnapshotResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromSnapshotResult {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterFromSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterFromSnapshotResult =>
    __isa(o, "RestoreDBClusterFromSnapshotResult");
}

/**
 * <p></p>
 */
export interface RestoreDBClusterToPointInTimeMessage {
  __type?: "RestoreDBClusterToPointInTimeMessage";
  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The name of the new DB cluster to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster.
   *             If this argument is omitted, the default DB cluster parameter group for the specified engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p>
   *          <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the
   *       KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key
   *       identified by the <code>KmsKeyId</code> parameter.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that isn't encrypted, then the restore request
   *       is rejected.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the option group for the new DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: A value from <code>1150-65535</code>.
   *       </p>
   *          <p>Default: The default port for the engine.</p>
   */
  Port?: number;

  /**
   * <p>The date and time to restore the DB cluster to.</p>
   *          <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                <p>Must be specified if <code>UseLatestRestorableTime</code> parameter isn't provided</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   */
  RestoreToTime?: Date;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the
   *                 source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the
   *                 source DB cluster.</p>
   *             </li>
   *          </ul>
   *         <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p>
   *         <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is
   *             restored as a full copy of the source DB cluster.</p>
   */
  RestoreType?: string;

  /**
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterIdentifier: string | undefined;

  Tags?: Tag[];
  /**
   * <p>A value that indicates whether to restore the DB cluster to the latest
   *             restorable backup time. By default, the DB cluster isn't restored to the latest
   *             restorable backup time.
   *       </p>
   *          <p>Constraints: Can't be specified if <code>RestoreToTime</code> parameter is provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace RestoreDBClusterToPointInTimeMessage {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterToPointInTimeMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterToPointInTimeMessage =>
    __isa(o, "RestoreDBClusterToPointInTimeMessage");
}

export interface RestoreDBClusterToPointInTimeResult {
  __type?: "RestoreDBClusterToPointInTimeResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterToPointInTimeResult {
  export const filterSensitiveLog = (
    obj: RestoreDBClusterToPointInTimeResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBClusterToPointInTimeResult =>
    __isa(o, "RestoreDBClusterToPointInTimeResult");
}

export interface RestoreDBInstanceFromDBSnapshotMessage {
  __type?: "RestoreDBInstanceFromDBSnapshotMessage";
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  DBInstanceClass?: string;
  DBInstanceIdentifier: string | undefined;
  DBName?: string;
  DBSnapshotIdentifier: string | undefined;
  DBSubnetGroupName?: string;
  Engine?: string;
  Iops?: number;
  LicenseModel?: string;
  MultiAZ?: boolean;
  OptionGroupName?: string;
  Port?: number;
  PubliclyAccessible?: boolean;
  Tags?: Tag[];
}

export namespace RestoreDBInstanceFromDBSnapshotMessage {
  export const filterSensitiveLog = (
    obj: RestoreDBInstanceFromDBSnapshotMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBInstanceFromDBSnapshotMessage =>
    __isa(o, "RestoreDBInstanceFromDBSnapshotMessage");
}

export interface RestoreDBInstanceFromDBSnapshotResult {
  __type?: "RestoreDBInstanceFromDBSnapshotResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromDBSnapshotResult {
  export const filterSensitiveLog = (
    obj: RestoreDBInstanceFromDBSnapshotResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBInstanceFromDBSnapshotResult =>
    __isa(o, "RestoreDBInstanceFromDBSnapshotResult");
}

export interface RestoreDBInstanceFromS3Message {
  __type?: "RestoreDBInstanceFromS3Message";
  /**
   * <p>The amount of storage (in gigabytes) to allocate initially for the DB instance.
   *             Follow the allocation rules specified in <code>CreateDBInstance</code>.
   *         </p>
   *
   *         <note>
   *             <p>Be sure to allocate enough memory for your new DB instance
   *                 so that the restore operation can succeed.
   *                 You can also allocate additional memory for future growth.
   *             </p>
   *         </note>
   */
  AllocatedStorage?: number;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically
   *             to the DB instance during the maintenance window. By default, minor engine upgrades
   *             are not applied automatically.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The Availability Zone that the DB instance is created in.
   *             For information about AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.
   *         </p>
   *         <p>
   *             Example: <code>us-east-1d</code>
   *         </p>
   *         <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.
   *             The specified Availability Zone must be in the same AWS Region as the current endpoint.
   *         </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of days for which automated backups are retained.
   *             Setting this parameter to a positive number enables backups.
   *             For more information, see <code>CreateDBInstance</code>.
   *         </p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *         </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The compute and memory capacity of the DB instance,
   *             for example, <code>db.m4.large</code>.
   *             Not all DB instance classes are available in all AWS Regions,
   *             or for all database engines.
   *             For the full list of DB instance classes,
   *             and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class.
   *         </p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.
   *         </p>
   *
   *         <p>Constraints:</p>
   *
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *
   *         <p>Example: <code>mydbinstance</code>
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the database to create when the DB instance is created.
   *             Follow the naming rules specified in <code>CreateDBInstance</code>.
   *         </p>
   */
  DBName?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *             for the specified DB engine is used.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *         <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: string[];

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *             For information about the supported DB engines, see <a>CreateDBInstance</a>.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *          <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *              IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.
   *         </p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service
   *                     User Guide</i>.
   *         </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The name of the database engine to be used for this instance.
   *         </p>
   *
   *         <p>Valid Values:  <code>mysql</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.
   *             Choose the latest minor version of your database engine.
   *             For information about engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>.
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second)
   *             to allocate initially for the DB instance.
   *             For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  Iops?: number;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB instance.
   *         </p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key.
   *             If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance,
   *             then you can use the KMS key alias instead of the ARN for the KM encryption key.
   *         </p>
   *         <p>If the <code>StorageEncrypted</code> parameter is enabled,
   *             and you do not specify a value for the <code>KmsKeyId</code> parameter,
   *             then Amazon RDS will use your default encryption key.
   *             AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS Region.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license model for this DB instance.
   *             Use <code>general-public-license</code>.
   *         </p>
   */
  LicenseModel?: string;

  /**
   * <p>The password for the master user.
   *             The password can include any printable ASCII character except "/", """, or "@".
   *         </p>
   *
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name for the master user.
   *         </p>
   *
   *         <p>Constraints:
   *         </p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The interval, in seconds,
   *             between points when Enhanced Monitoring metrics are collected for the DB instance.
   *             To disable collecting Enhanced Monitoring metrics, specify 0.
   *         </p>
   *
   *         <p>If <code>MonitoringRoleArn</code> is specified,
   *             then you must also set <code>MonitoringInterval</code> to a value other than 0.
   *         </p>
   *
   *         <p>Valid Values: 0, 1, 5, 10, 15, 30, 60
   *         </p>
   *         <p>Default: <code>0</code>
   *         </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS
   *             to send enhanced monitoring metrics to Amazon CloudWatch Logs.
   *             For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.
   *             For information on creating a monitoring role, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0,
   *             then you must supply a <code>MonitoringRoleArn</code> value.
   *         </p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.
   *             If the DB instance is a Multi-AZ deployment, you can't set the <code>AvailabilityZone</code> parameter.
   *         </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The name of the option group to associate with this DB instance.
   *             If this argument is omitted, the default option group for the specified engine is used.
   *         </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data.
   *             The KMS key ID is the Amazon Resource Name (ARN), the KMS key identifier,
   *             or the KMS key alias for the KMS encryption key.
   *         </p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default encryption key. AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The port number on which the database accepts connections.
   *         </p>
   *         <p>Type: Integer
   *         </p>
   *         <p>Valid Values: <code>1150</code>-<code>65535</code>
   *         </p>
   *         <p>Default: <code>3306</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>The time range each day
   *             during which automated backups are created
   *             if automated backups are enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">The Backup Window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The time range each week during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred backup window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name,
   *             which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.
   *             For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The name of your Amazon S3 bucket
   *             that contains your database backup file.
   *         </p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>An AWS Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket.
   *         </p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>The prefix of your Amazon S3 bucket.
   *         </p>
   */
  S3Prefix?: string;

  /**
   * <p>The name of the engine of your source database.
   *         </p>
   *
   *         <p>Valid Values:  <code>mysql</code>
   *         </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The engine version of your source database.
   *         </p>
   *
   *         <p>Valid Values: <code>5.6</code>
   *         </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>A value that indicates whether the new DB instance is encrypted or not.
   *         </p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.
   *         </p>
   *         <p>Valid values: <code>standard</code> | <code>gp2</code> | <code>io1</code>
   *         </p>
   *         <p>If you specify <code>io1</code>,
   *             you must also include a value for the <code>Iops</code> parameter.
   *         </p>
   *         <p>Default: <code>io1</code>
   *             if the <code>Iops</code> parameter is specified;
   *             otherwise <code>gp2</code>
   *         </p>
   */
  StorageType?: string;

  /**
   * <p>A list of tags to associate with this DB instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  Tags?: Tag[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A list of VPC security groups to associate with this DB instance.
   *         </p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace RestoreDBInstanceFromS3Message {
  export const filterSensitiveLog = (
    obj: RestoreDBInstanceFromS3Message
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBInstanceFromS3Message =>
    __isa(o, "RestoreDBInstanceFromS3Message");
}

export interface RestoreDBInstanceFromS3Result {
  __type?: "RestoreDBInstanceFromS3Result";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromS3Result {
  export const filterSensitiveLog = (
    obj: RestoreDBInstanceFromS3Result
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBInstanceFromS3Result =>
    __isa(o, "RestoreDBInstanceFromS3Result");
}

export interface RestoreDBInstanceToPointInTimeMessage {
  __type?: "RestoreDBInstanceToPointInTimeMessage";
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  DBInstanceClass?: string;
  DBName?: string;
  DBSubnetGroupName?: string;
  Engine?: string;
  Iops?: number;
  LicenseModel?: string;
  MultiAZ?: boolean;
  OptionGroupName?: string;
  Port?: number;
  PubliclyAccessible?: boolean;
  RestoreTime?: Date;
  SourceDBInstanceIdentifier: string | undefined;
  StorageType?: string;
  Tags?: Tag[];
  TargetDBInstanceIdentifier: string | undefined;
  TdeCredentialArn?: string;
  TdeCredentialPassword?: string;
  UseLatestRestorableTime?: boolean;
}

export namespace RestoreDBInstanceToPointInTimeMessage {
  export const filterSensitiveLog = (
    obj: RestoreDBInstanceToPointInTimeMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBInstanceToPointInTimeMessage =>
    __isa(o, "RestoreDBInstanceToPointInTimeMessage");
}

export interface RestoreDBInstanceToPointInTimeResult {
  __type?: "RestoreDBInstanceToPointInTimeResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceToPointInTimeResult {
  export const filterSensitiveLog = (
    obj: RestoreDBInstanceToPointInTimeResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreDBInstanceToPointInTimeResult =>
    __isa(o, "RestoreDBInstanceToPointInTimeResult");
}

/**
 * <p>Earliest and latest time an instance can be restored to:</p>
 */
export interface RestoreWindow {
  __type?: "RestoreWindow";
  /**
   * <p>The earliest time you can restore an instance to.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest time you can restore an instance to.</p>
   */
  LatestTime?: Date;
}

export namespace RestoreWindow {
  export const filterSensitiveLog = (obj: RestoreWindow): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreWindow => __isa(o, "RestoreWindow");
}

export interface RevokeDBSecurityGroupIngressMessage {
  __type?: "RevokeDBSecurityGroupIngressMessage";
  CIDRIP?: string;
  DBSecurityGroupName: string | undefined;
  EC2SecurityGroupId?: string;
  EC2SecurityGroupName?: string;
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeDBSecurityGroupIngressMessage {
  export const filterSensitiveLog = (
    obj: RevokeDBSecurityGroupIngressMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeDBSecurityGroupIngressMessage =>
    __isa(o, "RevokeDBSecurityGroupIngressMessage");
}

export interface RevokeDBSecurityGroupIngressResult {
  __type?: "RevokeDBSecurityGroupIngressResult";
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace RevokeDBSecurityGroupIngressResult {
  export const filterSensitiveLog = (
    obj: RevokeDBSecurityGroupIngressResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeDBSecurityGroupIngressResult =>
    __isa(o, "RevokeDBSecurityGroupIngressResult");
}

/**
 * <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ScalingConfiguration {
  __type?: "ScalingConfiguration";
  /**
   * <p>A value that indicates whether to allow or disallow automatic pause for an Aurora DB cluster in <code>serverless</code> DB engine mode.
   *             A DB cluster can be paused only when it's idle (it has no connections).</p>
   *         <note>
   *             <p>If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot.
   *                 In this case, the DB cluster is restored when there is a request to connect to it. </p>
   *         </note>
   */
  AutoPause?: boolean;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *         <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *         <p>The maximum capacity must be greater than or equal to the minimum capacity.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *         <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *         <p>The minimum capacity must be less than or equal to the maximum capacity.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The time, in seconds, before an Aurora DB cluster in <code>serverless</code> mode is paused.</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code> sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code>, the default, ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   *         <important>
   *             <p>If you specify <code>ForceApplyCapacityChange</code>, connections that
   *                 prevent Aurora Serverless from finding a scaling point might be dropped.</p>
   *         </important>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
   *                     Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  TimeoutAction?: string;
}

export namespace ScalingConfiguration {
  export const filterSensitiveLog = (obj: ScalingConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScalingConfiguration =>
    __isa(o, "ScalingConfiguration");
}

/**
 * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ScalingConfigurationInfo {
  __type?: "ScalingConfigurationInfo";
  /**
   * <p>A value that indicates whether automatic pause is allowed for the Aurora DB cluster
   *             in <code>serverless</code> DB engine mode.</p>
   *         <p>When the value is set to false for an Aurora Serverless DB cluster, the DB cluster automatically resumes.</p>
   */
  AutoPause?: boolean;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum capacity for the Aurora DB cluster in <code>serverless</code> DB engine
   *             mode.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The remaining amount of time, in seconds, before the Aurora DB cluster in
   *                 <code>serverless</code> mode is paused. A DB cluster can be paused only when
   *             it's idle (it has no connections).</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either
   *                 <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   */
  TimeoutAction?: string;
}

export namespace ScalingConfigurationInfo {
  export const filterSensitiveLog = (obj: ScalingConfigurationInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScalingConfigurationInfo =>
    __isa(o, "ScalingConfigurationInfo");
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 */
export interface SharedSnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SharedSnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SharedSnapshotQuotaExceededFault {
  export const filterSensitiveLog = (
    obj: SharedSnapshotQuotaExceededFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SharedSnapshotQuotaExceededFault =>
    __isa(o, "SharedSnapshotQuotaExceededFault");
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 */
export interface SnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  export const filterSensitiveLog = (obj: SnapshotQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnapshotQuotaExceededFault =>
    __isa(o, "SnapshotQuotaExceededFault");
}

/**
 * <p>SNS has responded that there is a problem with the SND topic specified.</p>
 */
export interface SNSInvalidTopicFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSInvalidTopicFault";
  $fault: "client";
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
 * <p>You do not have permission to publish to the SNS topic ARN.</p>
 */
export interface SNSNoAuthorizationFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  export const filterSensitiveLog = (obj: SNSNoAuthorizationFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSNoAuthorizationFault =>
    __isa(o, "SNSNoAuthorizationFault");
}

/**
 * <p>The SNS topic ARN does not exist.</p>
 */
export interface SNSTopicArnNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSTopicArnNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SNSTopicArnNotFoundFault {
  export const filterSensitiveLog = (obj: SNSTopicArnNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSTopicArnNotFoundFault =>
    __isa(o, "SNSTopicArnNotFoundFault");
}

/**
 * <p>The requested source could not be found.</p>
 */
export interface SourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SourceNotFoundFault {
  export const filterSensitiveLog = (obj: SourceNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceNotFoundFault =>
    __isa(o, "SourceNotFoundFault");
}

/**
 * <p>Contains an AWS Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegion {
  __type?: "SourceRegion";
  /**
   * <p>The endpoint for the source AWS Region endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the source AWS Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The status of the source AWS Region.</p>
   */
  Status?: string;
}

export namespace SourceRegion {
  export const filterSensitiveLog = (obj: SourceRegion): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceRegion => __isa(o, "SourceRegion");
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegionMessage {
  __type?: "SourceRegionMessage";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>A list of SourceRegion instances that contains each source AWS Region that the current AWS Region can get a Read Replica or a DB snapshot from.</p>
   */
  SourceRegions?: SourceRegion[];
}

export namespace SourceRegionMessage {
  export const filterSensitiveLog = (obj: SourceRegionMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceRegionMessage =>
    __isa(o, "SourceRegionMessage");
}

export type SourceType =
  | "db-instance"
  | "db-parameter-group"
  | "db-security-group"
  | "db-snapshot";

export interface StartActivityStreamRequest {
  __type?: "StartActivityStreamRequest";
  /**
   * <p>Specifies whether or not the database activity stream is to start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The AWS KMS key identifier for encrypting messages in the database activity stream.
   *             The key identifier can be either a key ID, a key ARN, or a key alias.</p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Specifies the mode of the database activity stream.
   *             Database events such as a change or access generate an activity stream event.
   *             The database session can handle these events either synchronously or asynchronously.
   *         </p>
   */
  Mode: ActivityStreamMode | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster,
   *             for example <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace StartActivityStreamRequest {
  export const filterSensitiveLog = (obj: StartActivityStreamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartActivityStreamRequest =>
    __isa(o, "StartActivityStreamRequest");
}

export interface StartActivityStreamResponse {
  __type?: "StartActivityStreamResponse";
  /**
   * <p>Indicates whether or not the database activity stream will start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The name of the Amazon Kinesis data stream to be used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The AWS KMS key identifier for encryption of messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The mode of the database activity stream.</p>
   */
  Mode?: ActivityStreamMode | string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;
}

export namespace StartActivityStreamResponse {
  export const filterSensitiveLog = (
    obj: StartActivityStreamResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartActivityStreamResponse =>
    __isa(o, "StartActivityStreamResponse");
}

export interface StartDBClusterMessage {
  __type?: "StartDBClusterMessage";
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StartDBClusterMessage {
  export const filterSensitiveLog = (obj: StartDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDBClusterMessage =>
    __isa(o, "StartDBClusterMessage");
}

export interface StartDBClusterResult {
  __type?: "StartDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace StartDBClusterResult {
  export const filterSensitiveLog = (obj: StartDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDBClusterResult =>
    __isa(o, "StartDBClusterResult");
}

export interface StartDBInstanceMessage {
  __type?: "StartDBInstanceMessage";
  /**
   * <p>
   *             The user-supplied instance identifier.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace StartDBInstanceMessage {
  export const filterSensitiveLog = (obj: StartDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDBInstanceMessage =>
    __isa(o, "StartDBInstanceMessage");
}

export interface StartDBInstanceResult {
  __type?: "StartDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace StartDBInstanceResult {
  export const filterSensitiveLog = (obj: StartDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartDBInstanceResult =>
    __isa(o, "StartDBInstanceResult");
}

export interface StopActivityStreamRequest {
  __type?: "StopActivityStreamRequest";
  /**
   * <p>Specifies whether or not the database activity stream is to stop as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster for the database activity stream.
   *             For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.
   *         </p>
   */
  ResourceArn: string | undefined;
}

export namespace StopActivityStreamRequest {
  export const filterSensitiveLog = (obj: StopActivityStreamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopActivityStreamRequest =>
    __isa(o, "StopActivityStreamRequest");
}

export interface StopActivityStreamResponse {
  __type?: "StopActivityStreamResponse";
  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The AWS KMS key identifier used for encrypting messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;
}

export namespace StopActivityStreamResponse {
  export const filterSensitiveLog = (obj: StopActivityStreamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopActivityStreamResponse =>
    __isa(o, "StopActivityStreamResponse");
}

export interface StopDBClusterMessage {
  __type?: "StopDBClusterMessage";
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StopDBClusterMessage {
  export const filterSensitiveLog = (obj: StopDBClusterMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDBClusterMessage =>
    __isa(o, "StopDBClusterMessage");
}

export interface StopDBClusterResult {
  __type?: "StopDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace StopDBClusterResult {
  export const filterSensitiveLog = (obj: StopDBClusterResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDBClusterResult =>
    __isa(o, "StopDBClusterResult");
}

export interface StopDBInstanceMessage {
  __type?: "StopDBInstanceMessage";
  /**
   * <p>
   *             The user-supplied instance identifier.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>
   *             The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.
   *         </p>
   */
  DBSnapshotIdentifier?: string;
}

export namespace StopDBInstanceMessage {
  export const filterSensitiveLog = (obj: StopDBInstanceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDBInstanceMessage =>
    __isa(o, "StopDBInstanceMessage");
}

export interface StopDBInstanceResult {
  __type?: "StopDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace StopDBInstanceResult {
  export const filterSensitiveLog = (obj: StopDBInstanceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopDBInstanceResult =>
    __isa(o, "StopDBInstanceResult");
}

/**
 * <p>The request would result in the user exceeding the allowed amount of storage
 *             available across all DB instances.</p>
 */
export interface StorageQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageQuotaExceededFault";
  $fault: "client";
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
 * <p>Storage of the <code>StorageType</code> specified can't be associated
 *             with the DB instance. </p>
 */
export interface StorageTypeNotSupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageTypeNotSupportedFault";
  $fault: "client";
  message?: string;
}

export namespace StorageTypeNotSupportedFault {
  export const filterSensitiveLog = (
    obj: StorageTypeNotSupportedFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorageTypeNotSupportedFault =>
    __isa(o, "StorageTypeNotSupportedFault");
}

export interface Subnet {
  __type?: "Subnet";
  SubnetAvailabilityZone?: AvailabilityZone;
  SubnetIdentifier?: string;
  SubnetStatus?: string;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj
  });
  export const isa = (o: any): o is Subnet => __isa(o, "Subnet");
}

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
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
 * <p>The supplied subscription name already exists.</p>
 */
export interface SubscriptionAlreadyExistFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionAlreadyExistFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionAlreadyExistFault {
  export const filterSensitiveLog = (
    obj: SubscriptionAlreadyExistFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionAlreadyExistFault =>
    __isa(o, "SubscriptionAlreadyExistFault");
}

/**
 * <p>The supplied category does not exist.</p>
 */
export interface SubscriptionCategoryNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionCategoryNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionCategoryNotFoundFault {
  export const filterSensitiveLog = (
    obj: SubscriptionCategoryNotFoundFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionCategoryNotFoundFault =>
    __isa(o, "SubscriptionCategoryNotFoundFault");
}

/**
 * <p>The subscription name does not exist.</p>
 */
export interface SubscriptionNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionNotFoundFault {
  export const filterSensitiveLog = (obj: SubscriptionNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscriptionNotFoundFault =>
    __isa(o, "SubscriptionNotFoundFault");
}

export interface Tag {
  __type?: "Tag";
  Key?: string;
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagListMessage {
  __type?: "TagListMessage";
  TagList?: Tag[];
}

export namespace TagListMessage {
  export const filterSensitiveLog = (obj: TagListMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagListMessage =>
    __isa(o, "TagListMessage");
}

export enum TargetType {
  RDS_INSTANCE = "RDS_INSTANCE",
  RDS_SERVERLESS_ENDPOINT = "RDS_SERVERLESS_ENDPOINT",
  TRACKED_CLUSTER = "TRACKED_CLUSTER"
}

/**
 * <p>A time zone associated with a
 *             <code>DBInstance</code>
 *             or a <code>DBSnapshot</code>.
 *             This data type is an element in the response to
 *             the <code>DescribeDBInstances</code>,
 *             the <code>DescribeDBSnapshots</code>,
 *             and the <code>DescribeDBEngineVersions</code>
 *             actions.
 *         </p>
 */
export interface Timezone {
  __type?: "Timezone";
  /**
   * <p>The name of the time zone.</p>
   */
  TimezoneName?: string;
}

export namespace Timezone {
  export const filterSensitiveLog = (obj: Timezone): any => ({
    ...obj
  });
  export const isa = (o: any): o is Timezone => __isa(o, "Timezone");
}

/**
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 */
export interface UpgradeTarget {
  __type?: "UpgradeTarget";
  /**
   * <p>A value that indicates whether the target version is applied to any source DB instances that have <code>AutoMinorVersionUpgrade</code> set to true.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * <p>The version of the database engine that a DB instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * <p>The name of the upgrade target database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the upgrade target database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major version.</p>
   */
  IsMajorVersionUpgrade?: boolean;
}

export namespace UpgradeTarget {
  export const filterSensitiveLog = (obj: UpgradeTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpgradeTarget => __isa(o, "UpgradeTarget");
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Specifies the details of authentication used by a proxy to log in as a specific database user.</p>
 */
export interface UserAuthConfig {
  __type?: "UserAuthConfig";
  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   */
  AuthScheme?: AuthScheme | string;

  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   */
  Description?: string;

  /**
   * <p>Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy.</p>
   */
  IAMAuth?: IAMAuthMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   */
  SecretArn?: string;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   */
  UserName?: string;
}

export namespace UserAuthConfig {
  export const filterSensitiveLog = (obj: UserAuthConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserAuthConfig =>
    __isa(o, "UserAuthConfig");
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Returns the details of authentication used by a proxy to log in as a specific database user.</p>
 */
export interface UserAuthConfigInfo {
  __type?: "UserAuthConfigInfo";
  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   */
  AuthScheme?: AuthScheme | string;

  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   */
  Description?: string;

  /**
   * <p>Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy.</p>
   */
  IAMAuth?: IAMAuthMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   */
  SecretArn?: string;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   */
  UserName?: string;
}

export namespace UserAuthConfigInfo {
  export const filterSensitiveLog = (obj: UserAuthConfigInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserAuthConfigInfo =>
    __isa(o, "UserAuthConfigInfo");
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *             You can use this information when you call
 *             <code>ModifyDBInstance</code>.
 *         </p>
 */
export interface ValidDBInstanceModificationsMessage {
  __type?: "ValidDBInstanceModificationsMessage";
  /**
   * <p>Valid storage options for your DB instance.
   *         </p>
   */
  Storage?: ValidStorageOptions[];

  /**
   * <p>Valid processor features for your DB instance.
   *         </p>
   */
  ValidProcessorFeatures?: AvailableProcessorFeature[];
}

export namespace ValidDBInstanceModificationsMessage {
  export const filterSensitiveLog = (
    obj: ValidDBInstanceModificationsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidDBInstanceModificationsMessage =>
    __isa(o, "ValidDBInstanceModificationsMessage");
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *         </p>
 */
export interface ValidStorageOptions {
  __type?: "ValidStorageOptions";
  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier.
   *             For example, 3-10,
   *             which means that provisioned IOPS can be between 3 and 10 times storage.
   *         </p>
   */
  IopsToStorageRatio?: DoubleRange[];

  /**
   * <p>The valid range of provisioned IOPS.
   *             For example, 1000-20000.
   *         </p>
   */
  ProvisionedIops?: Range[];

  /**
   * <p>The valid range of storage in gibibytes.
   *             For example, 100 to 16384.
   *         </p>
   */
  StorageSize?: Range[];

  /**
   * <p>The valid storage types for your DB instance.
   *             For example, gp2, io1.
   *         </p>
   */
  StorageType?: string;

  /**
   * <p>Whether or not Amazon RDS can automatically scale storage for DB instances that use the new instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;
}

export namespace ValidStorageOptions {
  export const filterSensitiveLog = (obj: ValidStorageOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidStorageOptions =>
    __isa(o, "ValidStorageOptions");
}

export interface VpcSecurityGroupMembership {
  __type?: "VpcSecurityGroupMembership";
  Status?: string;
  VpcSecurityGroupId?: string;
}

export namespace VpcSecurityGroupMembership {
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcSecurityGroupMembership =>
    __isa(o, "VpcSecurityGroupMembership");
}

/**
 * <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the AWS website.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 <i>RDS on VMware User Guide.</i>
 *             </a>
 *          </p>
 */
export interface VpnDetails {
  __type?: "VpnDetails";
  /**
   * <p>The IP address of network traffic from AWS to your on-premises data center.</p>
   */
  VpnGatewayIp?: string;

  /**
   * <p>The ID of the VPN.</p>
   */
  VpnId?: string;

  /**
   * <p>The name of the VPN.</p>
   */
  VpnName?: string;

  /**
   * <p>The preshared key (PSK) for the VPN.</p>
   */
  VpnPSK?: string;

  /**
   * <p>The state of the VPN.</p>
   */
  VpnState?: string;

  /**
   * <p>The IP address of network traffic from your on-premises data center. A custom AZ receives the network traffic.</p>
   */
  VpnTunnelOriginatorIP?: string;
}

export namespace VpnDetails {
  export const filterSensitiveLog = (obj: VpnDetails): any => ({
    ...obj,
    ...(obj.VpnPSK && { VpnPSK: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is VpnDetails => __isa(o, "VpnDetails");
}
