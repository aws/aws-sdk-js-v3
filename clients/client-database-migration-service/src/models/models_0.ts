// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DatabaseMigrationServiceServiceException as __BaseException } from "./DatabaseMigrationServiceServiceException";

/**
 * @public
 * <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 */
export class AccessDeniedFault extends __BaseException {
  readonly name: "AccessDeniedFault" = "AccessDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedFault, __BaseException>) {
    super({
      name: "AccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedFault.prototype);
  }
}

/**
 * @public
 * <p>Describes a quota for an Amazon Web Services account, for example the number of replication instances
 *          allowed.</p>
 */
export interface AccountQuota {
  /**
   * @public
   * <p>The name of the DMS quota for this Amazon Web Services account.</p>
   */
  AccountQuotaName?: string;

  /**
   * @public
   * <p>The amount currently used toward the quota maximum.</p>
   */
  Used?: number;

  /**
   * @public
   * <p>The maximum allowed value for the quota.</p>
   */
  Max?: number;
}

/**
 * @public
 * <p>A user-defined key-value pair that describes metadata added to an DMS resource and
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
   * @public
   * <p>A key is the required name of the tag. The string value can be 1-128 Unicode characters
   *          in length and can't be prefixed with "aws:" or "dms:". The string can only contain
   *          only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java
   *          regular expressions: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * @public
   * <p>A value is the optional value of the tag. The string value can be 1-256 Unicode
   *          characters in length and can't be prefixed with "aws:" or "dms:". The string can only
   *          contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-'
   *          (Java regular expressions: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the resource for which the tag is created.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 * <p>Associates a set of tags with an DMS resource.</p>
 */
export interface AddTagsToResourceMessage {
  /**
   * @public
   * <p>Identifies the DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN).</p>
   *          <p>For DMS, you can tag a replication instance, an endpoint, or a replication task.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tags to be assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface AddTagsToResourceResponse {}

/**
 * @public
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundFault extends __BaseException {
  readonly name: "ResourceNotFoundFault" = "ResourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundFault, __BaseException>) {
    super({
      name: "ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance
   *          action applies to.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>os-upgrade</code>, <code>system-update</code>, <code>db-upgrade</code>
   *          </p>
   */
  ApplyAction: string | undefined;

  /**
   * @public
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

/**
 * @public
 * <p>Describes a maintenance action pending for an DMS resource, including when and how
 *          it will be applied. This data type is a response element to the
 *             <code>DescribePendingMaintenanceActions</code> operation.</p>
 */
export interface PendingMaintenanceAction {
  /**
   * @public
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;

  /**
   * @public
   * <p>The date of the maintenance window when the action is to be applied. The maintenance
   *          action is applied to the resource during its first maintenance window after this date. If
   *          this date is specified, any <code>next-maintenance</code> opt-in requests are
   *          ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * @public
   * <p>The date when the maintenance action will be automatically applied. The maintenance
   *          action is applied to the resource on this date regardless of the maintenance window for the
   *          resource. If this date is specified, any <code>immediate</code> opt-in requests are
   *          ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * @public
   * <p>The type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * @public
   * <p>The effective date when the pending maintenance action will be applied to the resource.
   *          This date takes into account opt-in requests received from the
   *             <code>ApplyPendingMaintenanceAction</code> API operation, and also the
   *             <code>AutoAppliedAfterDate</code> and <code>ForcedApplyDate</code> parameter values.
   *          This value is blank if an opt-in request has not been received and nothing has been
   *          specified for <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * @public
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Identifies an DMS resource and any pending actions for it.</p>
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action
   *          applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.AWS.ARN.html"> Constructing an Amazon
   *             Resource Name (ARN) for DMS</a> in the DMS documentation.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
   * <p>Detailed information about the pending maintenance action.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];
}

/**
 * @public
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionResponse {
  /**
   * @public
   * <p>The DMS resource that the pending maintenance action will be applied to.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

/**
 * @public
 * <p>Provides information about the required target engine settings.</p>
 */
export interface RecommendationSettings {
  /**
   * @public
   * <p>The size of your target instance. Fleet Advisor calculates this value based on your
   *             data collection type, such as total capacity and resource utilization. Valid values
   *             include <code>"total-capacity"</code> and <code>"utilization"</code>.</p>
   */
  InstanceSizingType: string | undefined;

  /**
   * @public
   * <p>The deployment option for your target engine. For production databases, Fleet Advisor
   *             chooses Multi-AZ deployment. For development or test databases, Fleet Advisor chooses
   *             Single-AZ deployment. Valid values include <code>"development"</code> and
   *                 <code>"production"</code>.</p>
   */
  WorkloadType: string | undefined;
}

/**
 * @public
 * <p>Provides information about the source database to analyze and provide target
 *             recommendations according to the specified requirements.</p>
 */
export interface StartRecommendationsRequestEntry {
  /**
   * @public
   * <p>The identifier of the source database.</p>
   */
  DatabaseId: string | undefined;

  /**
   * @public
   * <p>The required target engine settings.</p>
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * @public
 */
export interface BatchStartRecommendationsRequest {
  /**
   * @public
   * <p>Provides information about source databases to analyze. After this analysis, Fleet
   *             Advisor recommends target engines for each source database.</p>
   */
  Data?: StartRecommendationsRequestEntry[];
}

/**
 * @public
 * <p>Provides information about the errors that occurred during the analysis of the source
 *             database.</p>
 */
export interface BatchStartRecommendationsErrorEntry {
  /**
   * @public
   * <p>The identifier of the source database.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The information about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The code of an error that occurred during the analysis of the source database.</p>
   */
  Code?: string;
}

/**
 * @public
 */
export interface BatchStartRecommendationsResponse {
  /**
   * @public
   * <p>A list with error details about the analysis of each source database.</p>
   */
  ErrorEntries?: BatchStartRecommendationsErrorEntry[];
}

/**
 * @public
 * <p>The resource is in a state that prevents it from being used for database migration.</p>
 */
export class InvalidResourceStateFault extends __BaseException {
  readonly name: "InvalidResourceStateFault" = "InvalidResourceStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateFault, __BaseException>) {
    super({
      name: "InvalidResourceStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface CancelReplicationTaskAssessmentRunMessage {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the premigration assessment run to be canceled.</p>
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

/**
 * @public
 * <p>The progress values reported by the <code>AssessmentProgress</code> response
 *          element.</p>
 */
export interface ReplicationTaskAssessmentRunProgress {
  /**
   * @public
   * <p>The number of individual assessments that are specified to run.</p>
   */
  IndividualAssessmentCount?: number;

  /**
   * @public
   * <p>The number of individual assessments that have completed, successfully or not.</p>
   */
  IndividualAssessmentCompletedCount?: number;
}

/**
 * @public
 * <p>Provides information that describes a premigration assessment run that you have started
 *          using the <code>StartReplicationTaskAssessmentRun</code> operation.</p>
 *          <p>Some of the information appears based on other operations that can return the
 *             <code>ReplicationTaskAssessmentRun</code> object.</p>
 */
export interface ReplicationTaskAssessmentRun {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of this assessment run.</p>
   */
  ReplicationTaskAssessmentRunArn?: string;

  /**
   * @public
   * <p>ARN of the migration task associated with this premigration
   *          assessment run.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * @public
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
   * @public
   * <p>Date on which the assessment run was created using the
   *             <code>StartReplicationTaskAssessmentRun</code> operation.</p>
   */
  ReplicationTaskAssessmentRunCreationDate?: Date;

  /**
   * @public
   * <p>Indication of the completion progress for the individual assessments specified to
   *          run.</p>
   */
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress;

  /**
   * @public
   * <p>Last message generated by an individual assessment failure.</p>
   */
  LastFailureMessage?: string;

  /**
   * @public
   * <p>ARN of the service role used to start the assessment run using the
   *          <code>StartReplicationTaskAssessmentRun</code> operation. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>Amazon S3 bucket where DMS stores the results of this assessment run.</p>
   */
  ResultLocationBucket?: string;

  /**
   * @public
   * <p>Folder in an Amazon S3 bucket where DMS stores the results of this assessment
   *          run.</p>
   */
  ResultLocationFolder?: string;

  /**
   * @public
   * <p>Encryption mode used to encrypt the assessment run results.</p>
   */
  ResultEncryptionMode?: string;

  /**
   * @public
   * <p>ARN of the KMS encryption key used to encrypt the assessment run results.</p>
   */
  ResultKmsKeyArn?: string;

  /**
   * @public
   * <p>Unique name of the assessment run.</p>
   */
  AssessmentRunName?: string;
}

/**
 * @public
 * <p></p>
 */
export interface CancelReplicationTaskAssessmentRunResponse {
  /**
   * @public
   * <p>The <code>ReplicationTaskAssessmentRun</code> object for the canceled assessment
   *          run.</p>
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}

/**
 * @public
 * @enum
 */
export const DmsSslModeValue = {
  NONE: "none",
  REQUIRE: "require",
  VERIFY_CA: "verify-ca",
  VERIFY_FULL: "verify-full",
} as const;

/**
 * @public
 */
export type DmsSslModeValue = (typeof DmsSslModeValue)[keyof typeof DmsSslModeValue];

/**
 * @public
 * <p>Provides information that defines a DocumentDB data provider.</p>
 */
export interface DocDbDataProviderSettings {
  /**
   * @public
   * <p>The name of the source DocumentDB server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the DocumentDB data provider.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The database name on the DocumentDB data provider.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The SSL mode used to connect to the DocumentDB data provider.
   *          The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;
}

/**
 * @public
 * <p>Provides information that defines a MariaDB data provider.</p>
 */
export interface MariaDbDataProviderSettings {
  /**
   * @public
   * <p>The name of the MariaDB server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the MariaDB data provider</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The SSL mode used to connect to the MariaDB data provider.
   *          The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;
}

/**
 * @public
 * <p>Provides information that defines a Microsoft SQL Server data provider.</p>
 */
export interface MicrosoftSqlServerDataProviderSettings {
  /**
   * @public
   * <p>The name of the Microsoft SQL Server server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the Microsoft SQL Server data provider.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The database name on the Microsoft SQL Server data provider.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The SSL mode used to connect to the Microsoft SQL Server data provider.
   *          The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;
}

/**
 * @public
 * @enum
 */
export const AuthMechanismValue = {
  DEFAULT: "default",
  MONGODB_CR: "mongodb_cr",
  SCRAM_SHA_1: "scram_sha_1",
} as const;

/**
 * @public
 */
export type AuthMechanismValue = (typeof AuthMechanismValue)[keyof typeof AuthMechanismValue];

/**
 * @public
 * @enum
 */
export const AuthTypeValue = {
  NO: "no",
  PASSWORD: "password",
} as const;

/**
 * @public
 */
export type AuthTypeValue = (typeof AuthTypeValue)[keyof typeof AuthTypeValue];

/**
 * @public
 * <p>Provides information that defines a MongoDB data provider.</p>
 */
export interface MongoDbDataProviderSettings {
  /**
   * @public
   * <p>The name of the MongoDB server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the MongoDB data provider.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The database name on the MongoDB data provider.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The SSL mode used to connect to the MongoDB data provider.
   *          The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The authentication type for the database connection. Valid values are PASSWORD or NO.</p>
   */
  AuthType?: AuthTypeValue;

  /**
   * @public
   * <p> The MongoDB database name. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>. </p>
   *          <p>The default is <code>"admin"</code>.</p>
   */
  AuthSource?: string;

  /**
   * @public
   * <p>The authentication method for connecting to the data provider. Valid values are DEFAULT, MONGODB_CR, or SCRAM_SHA_1.</p>
   */
  AuthMechanism?: AuthMechanismValue;
}

/**
 * @public
 * <p>Provides information that defines a MySQL data provider.</p>
 */
export interface MySqlDataProviderSettings {
  /**
   * @public
   * <p>The name of the MySQL server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the MySQL data provider.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The SSL mode used to connect to the MySQL data provider.
   *          The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;
}

/**
 * @public
 * <p>Provides information that defines an Oracle data provider.</p>
 */
export interface OracleDataProviderSettings {
  /**
   * @public
   * <p>The name of the Oracle server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the Oracle data provider.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The database name on the Oracle data provider.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The SSL mode used to connect to the Oracle data provider.
   *          The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The address of your Oracle Automatic Storage Management (ASM) server. You can set
   *          this value from the <code>asm_server</code> value. You set <code>asm_server</code> as part
   *          of the extra connection attribute string to access an Oracle server with Binary Reader that
   *          uses ASM. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source database</a>.</p>
   */
  AsmServer?: string;

  /**
   * @public
   * <p>The identifier of the secret in Secrets Manager that contains the Oracle ASM connection details.</p>
   *          <p>Required only if your data provider uses the Oracle ASM server.</p>
   */
  SecretsManagerOracleAsmSecretId?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that provides access to the secret in Secrets Manager
   *          that contains the Oracle ASM connection details.</p>
   */
  SecretsManagerOracleAsmAccessRoleArn?: string;

  /**
   * @public
   * <p>The identifier of the secret in Secrets Manager that contains the transparent data encryption (TDE)
   *          password. DMS requires this password to access Oracle redo logs encrypted by TDE
   *          using Binary Reader.</p>
   */
  SecretsManagerSecurityDbEncryptionSecretId?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that provides access to the secret in Secrets Manager
   *          that contains the TDE password.</p>
   */
  SecretsManagerSecurityDbEncryptionAccessRoleArn?: string;
}

/**
 * @public
 * <p>Provides information that defines a PostgreSQL data provider.</p>
 */
export interface PostgreSqlDataProviderSettings {
  /**
   * @public
   * <p>The name of the PostgreSQL server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the PostgreSQL data provider.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The database name on the PostgreSQL data provider.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The SSL mode used to connect to the PostgreSQL data provider.
   *          The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;
}

/**
 * @public
 * <p>Provides information that defines an Amazon Redshift data provider.</p>
 */
export interface RedshiftDataProviderSettings {
  /**
   * @public
   * <p>The name of the Amazon Redshift server.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value for the Amazon Redshift data provider.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The database name on the Amazon Redshift data provider.</p>
   */
  DatabaseName?: string;
}

/**
 * @public
 * <p>Provides information that defines a data provider.</p>
 */
export type DataProviderSettings =
  | DataProviderSettings.DocDbSettingsMember
  | DataProviderSettings.MariaDbSettingsMember
  | DataProviderSettings.MicrosoftSqlServerSettingsMember
  | DataProviderSettings.MongoDbSettingsMember
  | DataProviderSettings.MySqlSettingsMember
  | DataProviderSettings.OracleSettingsMember
  | DataProviderSettings.PostgreSqlSettingsMember
  | DataProviderSettings.RedshiftSettingsMember
  | DataProviderSettings.$UnknownMember;

/**
 * @public
 */
export namespace DataProviderSettings {
  /**
   * @public
   * <p>Provides information that defines an Amazon Redshift data provider.</p>
   */
  export interface RedshiftSettingsMember {
    RedshiftSettings: RedshiftDataProviderSettings;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information that defines a PostgreSQL data provider.</p>
   */
  export interface PostgreSqlSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings: PostgreSqlDataProviderSettings;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information that defines a MySQL data provider.</p>
   */
  export interface MySqlSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings: MySqlDataProviderSettings;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information that defines an Oracle data provider.</p>
   */
  export interface OracleSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings: OracleDataProviderSettings;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information that defines a Microsoft SQL Server data provider.</p>
   */
  export interface MicrosoftSqlServerSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings: MicrosoftSqlServerDataProviderSettings;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information that defines a DocumentDB data provider.</p>
   */
  export interface DocDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings: DocDbDataProviderSettings;
    MariaDbSettings?: never;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information that defines a MariaDB data provider.</p>
   */
  export interface MariaDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings: MariaDbDataProviderSettings;
    MongoDbSettings?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Provides information that defines a MongoDB data provider.</p>
   */
  export interface MongoDbSettingsMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    MongoDbSettings: MongoDbDataProviderSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RedshiftSettings?: never;
    PostgreSqlSettings?: never;
    MySqlSettings?: never;
    OracleSettings?: never;
    MicrosoftSqlServerSettings?: never;
    DocDbSettings?: never;
    MariaDbSettings?: never;
    MongoDbSettings?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RedshiftSettings: (value: RedshiftDataProviderSettings) => T;
    PostgreSqlSettings: (value: PostgreSqlDataProviderSettings) => T;
    MySqlSettings: (value: MySqlDataProviderSettings) => T;
    OracleSettings: (value: OracleDataProviderSettings) => T;
    MicrosoftSqlServerSettings: (value: MicrosoftSqlServerDataProviderSettings) => T;
    DocDbSettings: (value: DocDbDataProviderSettings) => T;
    MariaDbSettings: (value: MariaDbDataProviderSettings) => T;
    MongoDbSettings: (value: MongoDbDataProviderSettings) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataProviderSettings, visitor: Visitor<T>): T => {
    if (value.RedshiftSettings !== undefined) return visitor.RedshiftSettings(value.RedshiftSettings);
    if (value.PostgreSqlSettings !== undefined) return visitor.PostgreSqlSettings(value.PostgreSqlSettings);
    if (value.MySqlSettings !== undefined) return visitor.MySqlSettings(value.MySqlSettings);
    if (value.OracleSettings !== undefined) return visitor.OracleSettings(value.OracleSettings);
    if (value.MicrosoftSqlServerSettings !== undefined)
      return visitor.MicrosoftSqlServerSettings(value.MicrosoftSqlServerSettings);
    if (value.DocDbSettings !== undefined) return visitor.DocDbSettings(value.DocDbSettings);
    if (value.MariaDbSettings !== undefined) return visitor.MariaDbSettings(value.MariaDbSettings);
    if (value.MongoDbSettings !== undefined) return visitor.MongoDbSettings(value.MongoDbSettings);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateDataProviderMessage {
  /**
   * @public
   * <p>A user-friendly name for the data provider.</p>
   */
  DataProviderName?: string;

  /**
   * @public
   * <p>A user-friendly description of the data provider.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of database engine for the data provider. Valid values include <code>"aurora"</code>,
   *          <code>"aurora_postgresql"</code>, <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          and <code>"sqlserver"</code>. A value of <code>"aurora"</code> represents Amazon Aurora MySQL-Compatible Edition.</p>
   */
  Engine: string | undefined;

  /**
   * @public
   * <p>The settings in JSON format for a data provider.</p>
   */
  Settings: DataProviderSettings | undefined;

  /**
   * @public
   * <p>One or more tags to be assigned to the data provider.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Provides information that defines a data provider.</p>
 */
export interface DataProvider {
  /**
   * @public
   * <p>The name of the data provider.</p>
   */
  DataProviderName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the data provider.</p>
   */
  DataProviderArn?: string;

  /**
   * @public
   * <p>The time the data provider was created.</p>
   */
  DataProviderCreationTime?: Date;

  /**
   * @public
   * <p>A description of the data provider. Descriptions can have up to 31 characters.
   *          A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't
   *          end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of database engine for the data provider. Valid values include <code>"aurora"</code>,
   *          <code>"aurora_postgresql"</code>, <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          and <code>"sqlserver"</code>. A value of <code>"aurora"</code> represents Amazon Aurora MySQL-Compatible Edition.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The settings in JSON format for a data provider.</p>
   */
  Settings?: DataProviderSettings;
}

/**
 * @public
 */
export interface CreateDataProviderResponse {
  /**
   * @public
   * <p>The data provider that was created.</p>
   */
  DataProvider?: DataProvider;
}

/**
 * @public
 * <p>The resource you are attempting to create already exists.</p>
 */
export class ResourceAlreadyExistsFault extends __BaseException {
  readonly name: "ResourceAlreadyExistsFault" = "ResourceAlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p></p>
   */
  resourceArn?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsFault, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsFault.prototype);
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * @public
 * <p>The quota for this resource quota has been exceeded.</p>
 */
export class ResourceQuotaExceededFault extends __BaseException {
  readonly name: "ResourceQuotaExceededFault" = "ResourceQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceQuotaExceededFault, __BaseException>) {
    super({
      name: "ResourceQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceQuotaExceededFault.prototype);
  }
}

/**
 * @public
 * <p> The settings in JSON format for the DMS Transfer type source endpoint. </p>
 */
export interface DmsTransferSettings {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p> The name of the S3 bucket to use. </p>
   */
  BucketName?: string;
}

/**
 * @public
 * @enum
 */
export const NestingLevelValue = {
  NONE: "none",
  ONE: "one",
} as const;

/**
 * @public
 */
export type NestingLevelValue = (typeof NestingLevelValue)[keyof typeof NestingLevelValue];

/**
 * @public
 * <p>Provides information that defines a DocumentDB endpoint.</p>
 */
export interface DocDbSettings {
  /**
   * @public
   * <p>The user name you use to access the DocumentDB source endpoint. </p>
   */
  Username?: string;

  /**
   * @public
   * <p> The password for the user account you use to access the DocumentDB source endpoint.
   *       </p>
   */
  Password?: string;

  /**
   * @public
   * <p> The name of the server on the DocumentDB source endpoint. </p>
   */
  ServerName?: string;

  /**
   * @public
   * <p> The port value for the DocumentDB source endpoint. </p>
   */
  Port?: number;

  /**
   * @public
   * <p> The database name on the DocumentDB source endpoint. </p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p> Specifies either document or table mode. </p>
   *          <p>Default value is <code>"none"</code>. Specify <code>"none"</code> to use document mode.
   *          Specify <code>"one"</code> to use table mode.</p>
   */
  NestingLevel?: NestingLevelValue;

  /**
   * @public
   * <p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to
   *          <code>"none"</code>. </p>
   *          <p>Default value is <code>"false"</code>. </p>
   */
  ExtractDocId?: boolean;

  /**
   * @public
   * <p> Indicates the number of documents to preview to determine the document organization.
   *          Use this setting when <code>NestingLevel</code> is set to <code>"one"</code>. </p>
   *          <p>Must be a positive value greater than <code>0</code>. Default value is
   *          <code>1000</code>.</p>
   */
  DocsToInvestigate?: number;

  /**
   * @public
   * <p>The KMS key identifier that is used to encrypt the content on the replication
   *          instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *          DMS uses your default encryption key. KMS creates the default encryption key for
   *          your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the DocumentDB endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *             <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *             <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                   Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the DocumentDB endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>If <code>true</code>, DMS retrieves the entire document from the DocumentDB source during migration.
   *          This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates
   *          and deletes during migration, set this parameter to <code>false</code>.</p>
   */
  UseUpdateLookUp?: boolean;

  /**
   * @public
   * <p>If <code>true</code>, DMS replicates data to shard collections. DMS only uses this setting if
   *       the target endpoint is a DocumentDB elastic cluster.</p>
   *          <p>When this setting is <code>true</code>, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>You must set <code>TargetTablePrepMode</code> to <code>nothing</code>.</p>
   *             </li>
   *             <li>
   *                <p>DMS automatically sets <code>useUpdateLookup</code> to <code>false</code>.</p>
   *             </li>
   *          </ul>
   */
  ReplicateShardCollections?: boolean;
}

/**
 * @public
 * <p>Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM)
 *          role used to define an Amazon DynamoDB target endpoint.</p>
 */
export interface DynamoDbSettings {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn: string | undefined;
}

/**
 * @public
 * <p>Provides information that defines an OpenSearch endpoint.</p>
 */
export interface ElasticsearchSettings {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) used by the service to access the IAM role.
   *          The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The endpoint for the OpenSearch cluster. DMS uses HTTPS if a transport
   *          protocol (http/https) is not specified.</p>
   */
  EndpointUri: string | undefined;

  /**
   * @public
   * <p>The maximum percentage of records that can fail to be written before a full load
   *             operation stops.</p>
   *          <p>To avoid early failure, this counter is only effective after 1000 records
   *          are transferred. OpenSearch also has the concept of error monitoring during the
   *          last 10 minutes of an Observation Window. If transfer of all records fail in the
   *          last 10 minutes, the full load operation stops. </p>
   */
  FullLoadErrorPercentage?: number;

  /**
   * @public
   * <p>The maximum number of seconds for which DMS retries failed API requests to the
   *          OpenSearch cluster.</p>
   */
  ErrorRetryDuration?: number;

  /**
   * @public
   * <p>Set this option to <code>true</code> for DMS to migrate documentation using the documentation type <code>_doc</code>.  OpenSearch and
   *       an Elasticsearch cluster only support the _doc documentation type in versions 7. x and later. The default value is <code>false</code>.</p>
   */
  UseNewMappingType?: boolean;
}

/**
 * @public
 * @enum
 */
export const ReplicationEndpointTypeValue = {
  SOURCE: "source",
  TARGET: "target",
} as const;

/**
 * @public
 */
export type ReplicationEndpointTypeValue =
  (typeof ReplicationEndpointTypeValue)[keyof typeof ReplicationEndpointTypeValue];

/**
 * @public
 * @enum
 */
export const TargetDbType = {
  MULTIPLE_DATABASES: "multiple-databases",
  SPECIFIC_DATABASE: "specific-database",
} as const;

/**
 * @public
 */
export type TargetDbType = (typeof TargetDbType)[keyof typeof TargetDbType];

/**
 * @public
 * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
 */
export interface GcpMySQLSettings {
  /**
   * @public
   * <p>Specifies a script to run immediately after DMS connects to the endpoint.
   *          The migration task continues running regardless if the SQL statement succeeds or fails.</p>
   *          <p>For this parameter, provide the code of the script itself, not the name of a file containing the script. </p>
   */
  AfterConnectScript?: string;

  /**
   * @public
   * <p>Cleans and recreates table metadata information on the replication instance
   *          when a mismatch occurs. For example, in a situation where running an alter DDL
   *          on the table could result in different information about the table cached in the
   *          replication instance.  </p>
   */
  CleanSourceMetadataOnMismatch?: boolean;

  /**
   * @public
   * <p>Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify
   *          the database using the <code>DatabaseName</code> request parameter on either the <code>CreateEndpoint</code>
   *          or <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create or modify a
   *          MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify
   *          the database only when you specify the schema in the table-mapping rules of the DMS task. </p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.</p>
   *          <p>Example: <code>eventsPollInterval=5;</code>
   *          </p>
   *          <p>In the example, DMS checks for changes in the binary logs every five seconds. </p>
   */
  EventsPollInterval?: number;

  /**
   * @public
   * <p>Specifies where to migrate source tables on the target, either to a single database or multiple databases.</p>
   *          <p>Example: <code>targetDbType=MULTIPLE_DATABASES</code>
   *          </p>
   */
  TargetDbType?: TargetDbType;

  /**
   * @public
   * <p>Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.</p>
   *          <p>Example: <code>maxFileSize=512</code>
   *          </p>
   */
  MaxFileSize?: number;

  /**
   * @public
   * <p>Improves performance when loading data into the MySQL-compatible target database. Specifies how many
   *          threads to use to load the data into the MySQL-compatible target database. Setting a large number of
   *          threads can have an adverse effect on database performance, because a separate connection is required
   *          for each thread. The default is one.</p>
   *          <p>Example: <code>parallelLoadThreads=1</code>
   *          </p>
   */
  ParallelLoadThreads?: number;

  /**
   * @public
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The MySQL host name.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>Specifies the time zone for the source MySQL database.</p>
   *          <p>Example: <code>serverTimezone=US/Pacific;</code>
   *          </p>
   *          <p>Note: Do not enclose time zones in single quotes.</p>
   */
  ServerTimezone?: string;

  /**
   * @public
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS
   *          as the trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret.</code> The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret
   *          that allows access to the MySQL endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify
   *          the values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify clear-text
   *          values for <code>UserName</code>, <code>Password</code>, <code>ServerName</code>, and <code>Port</code>.
   *          You can't specify both. For more information on creating this <code>SecretsManagerSecret</code>
   *          and the <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code> required to
   *          access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service resources</a> in the
   *          Database Migration Service User Guide.
   *
   *       </p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code>
   *          that contains the MySQL endpoint connection details. </p>
   */
  SecretsManagerSecretId?: string;
}

/**
 * @public
 * <p>Provides information that defines an IBM Db2 LUW endpoint.</p>
 */
export interface IBMDb2Settings {
  /**
   * @public
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Endpoint TCP port. The default value is 50000.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>Enables ongoing replication (CDC) as a BOOLEAN value. The
   *          default is true.</p>
   */
  SetDataCaptureChanges?: boolean;

  /**
   * @public
   * <p>For ongoing replication (CDC), use CurrentLSN to specify a
   *          log sequence number (LSN) where you want the replication
   *          to start.</p>
   */
  CurrentLsn?: string;

  /**
   * @public
   * <p>Maximum number of bytes per read, as a NUMBER value.
   *          The default is 64 KB.</p>
   */
  MaxKBytesPerRead?: number;

  /**
   * @public
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of
   *          the Amazon Web Services Secrets Manager secret that allows access to the Db2 LUW endpoint. </p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the Db2 LUW endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;
}

/**
 * @public
 * @enum
 */
export const MessageFormatValue = {
  JSON: "json",
  JSON_UNFORMATTED: "json-unformatted",
} as const;

/**
 * @public
 */
export type MessageFormatValue = (typeof MessageFormatValue)[keyof typeof MessageFormatValue];

/**
 * @public
 * @enum
 */
export const KafkaSaslMechanism = {
  PLAIN: "plain",
  SCRAM_SHA_512: "scram-sha-512",
} as const;

/**
 * @public
 */
export type KafkaSaslMechanism = (typeof KafkaSaslMechanism)[keyof typeof KafkaSaslMechanism];

/**
 * @public
 * @enum
 */
export const KafkaSecurityProtocol = {
  PLAINTEXT: "plaintext",
  SASL_SSL: "sasl-ssl",
  SSL_AUTHENTICATION: "ssl-authentication",
  SSL_ENCRYPTION: "ssl-encryption",
} as const;

/**
 * @public
 */
export type KafkaSecurityProtocol = (typeof KafkaSecurityProtocol)[keyof typeof KafkaSecurityProtocol];

/**
 * @public
 * @enum
 */
export const KafkaSslEndpointIdentificationAlgorithm = {
  HTTPS: "https",
  NONE: "none",
} as const;

/**
 * @public
 */
export type KafkaSslEndpointIdentificationAlgorithm =
  (typeof KafkaSslEndpointIdentificationAlgorithm)[keyof typeof KafkaSslEndpointIdentificationAlgorithm];

/**
 * @public
 * <p>Provides information that describes an Apache Kafka endpoint. This
 *          information includes the output format of records applied to the endpoint and details of
 *          transaction and control table data information.</p>
 */
export interface KafkaSettings {
  /**
   * @public
   * <p>A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. Specify each broker location
   *          in the form <code>
   *                <i>broker-hostname-or-ip</i>:<i>port</i>
   *             </code>. For example, <code>"ec2-12-345-678-901.compute-1.amazonaws.com:2345"</code>.
   *          For more information and examples of specifying a list of broker locations,
   *          see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html">Using Apache Kafka as a target for Database Migration Service</a>
   *          in the <i>Database Migration Service User Guide</i>.
   *       </p>
   */
  Broker?: string;

  /**
   * @public
   * <p>The topic to which you migrate the data. If you don't specify a topic, DMS
   *          specifies <code>"kafka-default-topic"</code> as the migration topic.</p>
   */
  Topic?: string;

  /**
   * @public
   * <p>The output format for the records created on the endpoint. The message format is
   *             <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no
   *          tab).</p>
   */
  MessageFormat?: MessageFormatValue;

  /**
   * @public
   * <p>Provides detailed transaction information from the source database. This information
   *          includes a commit timestamp, a log position, and values for <code>transaction_id</code>,
   *          previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record
   *          offset within a transaction). The default is <code>false</code>.</p>
   */
  IncludeTransactionDetails?: boolean;

  /**
   * @public
   * <p>Shows the partition value within the Kafka message output unless the partition type is
   *             <code>schema-table-type</code>. The default is <code>false</code>.</p>
   */
  IncludePartitionValue?: boolean;

  /**
   * @public
   * <p>Prefixes schema and table names to partition values, when the partition type is
   *             <code>primary-key-type</code>. Doing this increases data distribution among Kafka
   *          partitions. For example, suppose that a SysBench schema has thousands of tables and each
   *          table has only limited range for a primary key. In this case, the same primary key is sent
   *          from thousands of tables to the same partition, which causes throttling. The default is
   *             <code>false</code>.</p>
   */
  PartitionIncludeSchemaTable?: boolean;

  /**
   * @public
   * <p>Includes any data definition language (DDL) operations that change the table in the
   *          control data, such as <code>rename-table</code>, <code>drop-table</code>,
   *             <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The
   *          default is <code>false</code>.</p>
   */
  IncludeTableAlterOperations?: boolean;

  /**
   * @public
   * <p>Shows detailed control information for table definition, column definition, and table
   *          and column changes in the Kafka message output. The default is <code>false</code>.</p>
   */
  IncludeControlDetails?: boolean;

  /**
   * @public
   * <p>The maximum size in bytes for records created on the endpoint The default is 1,000,000.</p>
   */
  MessageMaxBytes?: number;

  /**
   * @public
   * <p>Include NULL and empty columns for records migrated to the endpoint. The default is <code>false</code>.</p>
   */
  IncludeNullAndEmpty?: boolean;

  /**
   * @public
   * <p>Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include
   *          <code>ssl-encryption</code>, <code>ssl-authentication</code>, and <code>sasl-ssl</code>.
   *          <code>sasl-ssl</code> requires <code>SaslUsername</code> and <code>SaslPassword</code>.</p>
   */
  SecurityProtocol?: KafkaSecurityProtocol;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.</p>
   */
  SslClientCertificateArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.</p>
   */
  SslClientKeyArn?: string;

  /**
   * @public
   * <p> The password for the client private key used to securely connect to a Kafka target endpoint.</p>
   */
  SslClientKeyPassword?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that DMS uses
   *          to securely connect to your Kafka target endpoint.</p>
   */
  SslCaCertificateArn?: string;

  /**
   * @public
   * <p> The secure user name you created when you first set up your MSK cluster to validate a
   *          client identity and make an encrypted connection between server and client using SASL-SSL
   *          authentication.</p>
   */
  SaslUsername?: string;

  /**
   * @public
   * <p>The secure password you created when you first set up your MSK cluster to validate a client identity and
   *          make an encrypted connection between server and client using SASL-SSL authentication.</p>
   */
  SaslPassword?: string;

  /**
   * @public
   * <p>Set this optional parameter to <code>true</code> to avoid adding a '0x' prefix
   *          to raw data in hexadecimal format. For example, by default, DMS adds a '0x'
   *          prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka
   *          target. Use the <code>NoHexPrefix</code> endpoint setting to enable migration of RAW data
   *          type columns without adding the '0x' prefix.</p>
   */
  NoHexPrefix?: boolean;

  /**
   * @public
   * <p>For SASL/SSL authentication, DMS supports the <code>SCRAM-SHA-512</code> mechanism by default. DMS versions
   *          3.5.0 and later also support the <code>PLAIN</code> mechanism. To use the <code>PLAIN</code> mechanism, set this
   *          parameter to <code>PLAIN.</code>
   *          </p>
   */
  SaslMechanism?: KafkaSaslMechanism;

  /**
   * @public
   * <p>Sets hostname verification
   *          for the certificate. This setting is supported in DMS version 3.5.1 and later. </p>
   */
  SslEndpointIdentificationAlgorithm?: KafkaSslEndpointIdentificationAlgorithm;
}

/**
 * @public
 * <p>Provides information that describes an Amazon Kinesis Data Stream endpoint. This
 *          information includes the output format of records applied to the endpoint and details of
 *          transaction and control table data information.</p>
 */
export interface KinesisSettings {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.</p>
   */
  StreamArn?: string;

  /**
   * @public
   * <p>The output format for the records created on the endpoint. The message format is
   *          <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no tab).</p>
   */
  MessageFormat?: MessageFormatValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the IAM role
   *          that DMS uses to write to the Kinesis data stream.
   *          The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>Provides detailed transaction information from the source database. This information
   *          includes a commit timestamp, a log position, and values for <code>transaction_id</code>,
   *          previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record
   *          offset within a transaction). The default is <code>false</code>.</p>
   */
  IncludeTransactionDetails?: boolean;

  /**
   * @public
   * <p>Shows the partition value within the Kinesis message output, unless the partition type
   *          is <code>schema-table-type</code>. The default is <code>false</code>.</p>
   */
  IncludePartitionValue?: boolean;

  /**
   * @public
   * <p>Prefixes schema and table names to partition values, when the partition type is
   *             <code>primary-key-type</code>. Doing this increases data distribution among Kinesis
   *          shards. For example, suppose that a SysBench schema has thousands of tables and each table
   *          has only limited range for a primary key. In this case, the same primary key is sent from
   *          thousands of tables to the same shard, which causes throttling. The default is <code>false</code>.</p>
   */
  PartitionIncludeSchemaTable?: boolean;

  /**
   * @public
   * <p>Includes any data definition language (DDL) operations that change the table in the
   *          control data, such as <code>rename-table</code>, <code>drop-table</code>,
   *             <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The
   *          default is <code>false</code>.</p>
   */
  IncludeTableAlterOperations?: boolean;

  /**
   * @public
   * <p>Shows detailed control information for table definition, column definition, and table
   *          and column changes in the Kinesis message output. The default is <code>false</code>.</p>
   */
  IncludeControlDetails?: boolean;

  /**
   * @public
   * <p>Include NULL and empty columns for records migrated to the endpoint. The default is <code>false</code>.</p>
   */
  IncludeNullAndEmpty?: boolean;

  /**
   * @public
   * <p>Set this optional parameter to <code>true</code> to avoid adding a '0x' prefix
   *          to raw data in hexadecimal format. For example, by default, DMS adds a '0x'
   *          prefix to the LOB column type in hexadecimal format moving from an Oracle source to an
   *          Amazon Kinesis target. Use the <code>NoHexPrefix</code> endpoint setting to enable
   *          migration of RAW data type columns without adding the '0x' prefix.</p>
   */
  NoHexPrefix?: boolean;
}

/**
 * @public
 * @enum
 */
export const SafeguardPolicy = {
  EXCLUSIVE_AUTOMATIC_TRUNCATION: "exclusive-automatic-truncation",
  RELY_ON_SQL_SERVER_REPLICATION_AGENT: "rely-on-sql-server-replication-agent",
  SHARED_AUTOMATIC_TRUNCATION: "shared-automatic-truncation",
} as const;

/**
 * @public
 */
export type SafeguardPolicy = (typeof SafeguardPolicy)[keyof typeof SafeguardPolicy];

/**
 * @public
 * @enum
 */
export const TlogAccessMode = {
  BackupOnly: "BackupOnly",
  PreferBackup: "PreferBackup",
  PreferTlog: "PreferTlog",
  TlogOnly: "TlogOnly",
} as const;

/**
 * @public
 */
export type TlogAccessMode = (typeof TlogAccessMode)[keyof typeof TlogAccessMode];

/**
 * @public
 * <p>Provides information that defines a Microsoft SQL Server endpoint.</p>
 */
export interface MicrosoftSQLServerSettings {
  /**
   * @public
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The maximum size of the packets (in bytes) used to transfer
   *          data using BCP.</p>
   */
  BcpPacketSize?: number;

  /**
   * @public
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Specifies a file group for the DMS internal tables. When the replication task
   *          starts, all the internal DMS control tables (awsdms_ apply_exception, awsdms_apply,
   *          awsdms_changes) are created for the specified file group.</p>
   */
  ControlTablesFileGroup?: string;

  /**
   * @public
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Cleans and recreates table metadata information on the replication instance when
   *          a mismatch occurs. An example is a situation where running an alter DDL statement on
   *          a table might result in different information about the table cached in the replication
   *          instance.</p>
   */
  QuerySingleAlwaysOnNode?: boolean;

  /**
   * @public
   * <p>When this attribute is set to <code>Y</code>, DMS only reads changes
   *          from transaction log backups and doesn't read from the
   *          active transaction log file during ongoing replication. Setting
   *          this parameter to <code>Y</code> enables you to control active transaction
   *          log file growth during full load and ongoing replication
   *          tasks. However, it can add some source latency to ongoing
   *          replication.</p>
   */
  ReadBackupOnly?: boolean;

  /**
   * @public
   * <p>Use this attribute to minimize the need to access the
   *          backup log and enable DMS to prevent truncation using one of the
   *          following two methods.</p>
   *          <p>
   *             <i>Start transactions in the database:</i> This is the default
   *          method. When this method is used, DMS prevents
   *          TLOG truncation by mimicking a transaction in the database.
   *          As long as such a transaction is open, changes that appear
   *          after the transaction started aren't truncated. If you need
   *          Microsoft Replication to be enabled in your database, then
   *          you must choose this method.</p>
   *          <p>
   *             <i>Exclusively use sp_repldone within a single task</i>: When
   *          this method is used, DMS reads the changes and then
   *          uses sp_repldone to mark the TLOG transactions as ready
   *          for truncation. Although this method doesn't involve any
   *          transactional activities, it can only be used when Microsoft
   *          Replication isn't running. Also, when using this method, only
   *          one DMS task can access the database at any given
   *          time. Therefore, if you need to run parallel DMS tasks
   *          against the same database, use the default method.</p>
   */
  SafeguardPolicy?: SafeguardPolicy;

  /**
   * @public
   * <p>Fully qualified domain name of the endpoint. For an Amazon RDS SQL Server instance, this is the
   *          output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>,
   *       in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>Use this to attribute to transfer data for full-load operations
   *          using BCP. When the target table contains an identity
   *          column that does not exist in the source table, you must
   *          disable the use BCP for loading table option.</p>
   */
  UseBcpFullLoad?: boolean;

  /**
   * @public
   * <p>When this attribute is set to <code>Y</code>, DMS processes third-party
   *          transaction log backups if they are created in native format.</p>
   */
  UseThirdPartyBackupDevice?: boolean;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager
   *           secret that allows access to the SQL Server endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the SQL Server endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>Use the <code>TrimSpaceInChar</code> source endpoint setting to right-trim data
   *          on CHAR and NCHAR data types during migration. Setting <code>TrimSpaceInChar</code>
   *          does not left-trim data. The default value is <code>true</code>.</p>
   */
  TrimSpaceInChar?: boolean;

  /**
   * @public
   * <p>Indicates the mode used to fetch CDC data.</p>
   */
  TlogAccessMode?: TlogAccessMode;

  /**
   * @public
   * <p>Forces LOB lookup on inline LOB.</p>
   */
  ForceLobLookup?: boolean;
}

/**
 * @public
 * <p>Provides information that defines a MongoDB endpoint.</p>
 */
export interface MongoDbSettings {
  /**
   * @public
   * <p>The user name you use to access the MongoDB source endpoint. </p>
   */
  Username?: string;

  /**
   * @public
   * <p> The password for the user account you use to access the MongoDB source endpoint.
   *       </p>
   */
  Password?: string;

  /**
   * @public
   * <p> The name of the server on the MongoDB source endpoint. For MongoDB Atlas, provide the
   *       server name for any of the servers in the replication set.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p> The port value for the MongoDB source endpoint. </p>
   */
  Port?: number;

  /**
   * @public
   * <p> The database name on the MongoDB source endpoint. </p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p> The authentication type you use to access the MongoDB source endpoint.</p>
   *          <p>When when set to <code>"no"</code>, user name and password parameters are not used and
   *          can be empty. </p>
   */
  AuthType?: AuthTypeValue;

  /**
   * @public
   * <p> The authentication mechanism you use to access the MongoDB source endpoint.</p>
   *          <p>For the default value, in MongoDB version 2.x, <code>"default"</code> is
   *             <code>"mongodb_cr"</code>. For MongoDB version 3.x or later, <code>"default"</code> is
   *             <code>"scram_sha_1"</code>. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>.</p>
   */
  AuthMechanism?: AuthMechanismValue;

  /**
   * @public
   * <p> Specifies either document or table mode. </p>
   *          <p>Default value is <code>"none"</code>. Specify <code>"none"</code> to use document mode.
   *          Specify <code>"one"</code> to use table mode.</p>
   */
  NestingLevel?: NestingLevelValue;

  /**
   * @public
   * <p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to
   *             <code>"none"</code>. </p>
   *          <p>Default value is <code>"false"</code>. </p>
   */
  ExtractDocId?: string;

  /**
   * @public
   * <p> Indicates the number of documents to preview to determine the document organization.
   *          Use this setting when <code>NestingLevel</code> is set to <code>"one"</code>. </p>
   *          <p>Must be a positive value greater than <code>0</code>. Default value is
   *          <code>1000</code>.</p>
   */
  DocsToInvestigate?: string;

  /**
   * @public
   * <p> The MongoDB database name. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>. </p>
   *          <p>The default is <code>"admin"</code>.</p>
   */
  AuthSource?: string;

  /**
   * @public
   * <p>The KMS key identifier that is used to encrypt the content on the replication
   *          instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *          DMS uses your default encryption key. KMS creates the default encryption key for
   *          your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the MongoDB endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the MongoDB endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>If <code>true</code>, DMS retrieves the entire document from the MongoDB source during migration.
   *          This may cause a migration failure if the server response exceeds bandwidth limits. To fetch only updates
   *          and deletes during migration, set this parameter to <code>false</code>.</p>
   */
  UseUpdateLookUp?: boolean;

  /**
   * @public
   * <p>If <code>true</code>, DMS replicates data to shard collections. DMS only uses this setting if
   *          the target endpoint is a DocumentDB elastic cluster.</p>
   *          <p>When this setting is <code>true</code>, note the following:</p>
   *          <ul>
   *             <li>
   *                <p>You must set <code>TargetTablePrepMode</code> to <code>nothing</code>.</p>
   *             </li>
   *             <li>
   *                <p>DMS automatically sets <code>useUpdateLookup</code> to <code>false</code>.</p>
   *             </li>
   *          </ul>
   */
  ReplicateShardCollections?: boolean;
}

/**
 * @public
 * <p>Provides information that defines a MySQL endpoint.</p>
 */
export interface MySQLSettings {
  /**
   * @public
   * <p>Specifies a script to run immediately after DMS
   *          connects to the endpoint. The migration task continues
   *          running regardless if the SQL statement succeeds or fails.</p>
   *          <p>For this parameter, provide the code of the script itself, not the name of a file
   *          containing the script.</p>
   */
  AfterConnectScript?: string;

  /**
   * @public
   * <p>Cleans and recreates table metadata information on the replication instance
   *          when a mismatch occurs. For example, in a situation where running an alter DDL
   *          on the table could result in different information about the table cached in the
   *          replication instance.  </p>
   */
  CleanSourceMetadataOnMismatch?: boolean;

  /**
   * @public
   * <p>Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly
   *          specify the database using the <code>DatabaseName</code> request parameter on either the
   *          <code>CreateEndpoint</code> or <code>ModifyEndpoint</code> API call. Specifying
   *          <code>DatabaseName</code> when you create or modify a MySQL endpoint replicates all the
   *          task tables to this single database. For MySQL endpoints, you specify the database only when
   *          you specify the schema in the table-mapping rules of the DMS task.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Specifies how often to check the binary log for new
   *          changes/events when the database is idle. The default is five seconds.</p>
   *          <p>Example: <code>eventsPollInterval=5;</code>
   *          </p>
   *          <p>In the example, DMS checks for changes in the binary
   *          logs every five seconds.</p>
   */
  EventsPollInterval?: number;

  /**
   * @public
   * <p>Specifies where to migrate source tables on the target, either
   *          to a single database or multiple databases. If you specify
   *       <code>SPECIFIC_DATABASE</code>, specify the database name using the <code>DatabaseName</code>
   *       parameter of the <code>Endpoint</code> object.</p>
   *          <p>Example: <code>targetDbType=MULTIPLE_DATABASES</code>
   *          </p>
   */
  TargetDbType?: TargetDbType;

  /**
   * @public
   * <p>Specifies the maximum size (in KB) of any .csv file used to
   *          transfer data to a MySQL-compatible database.</p>
   *          <p>Example: <code>maxFileSize=512</code>
   *          </p>
   */
  MaxFileSize?: number;

  /**
   * @public
   * <p>Improves performance when loading data into the MySQL-compatible target database.
   *          Specifies how many threads to use to load the data into the MySQL-compatible target
   *          database. Setting a large number of threads can have an adverse effect on database
   *          performance, because a separate connection is required for each thread. The default is one.</p>
   *          <p>Example: <code>parallelLoadThreads=1</code>
   *          </p>
   */
  ParallelLoadThreads?: number;

  /**
   * @public
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The host name of the endpoint database. </p>
   *          <p>For an Amazon RDS MySQL instance, this is the
   *          output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>,
   *          in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   *          <p>For an Aurora MySQL instance, this is the
   *          output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html">DescribeDBClusters</a>,
   *          in the <code>Endpoint</code> field.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>Specifies the time zone for the source MySQL database.</p>
   *          <p>Example: <code>serverTimezone=US/Pacific;</code>
   *          </p>
   *          <p>Note: Do not enclose time zones in single quotes.</p>
   */
  ServerTimezone?: string;

  /**
   * @public
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager
   *           secret that allows access to the MySQL endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the MySQL endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;
}

/**
 * @public
 * <p>Provides information that defines an Amazon Neptune endpoint.</p>
 */
export interface NeptuneSettings {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the service role that you created for the Neptune
   *          target endpoint. The role must allow the <code>iam:PassRole</code> action.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.ServiceRole">Creating an IAM Service Role for Accessing Amazon Neptune as a Target</a> in the <i>Database Migration Service User
   *             Guide. </i>
   *          </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket where DMS can temporarily store migrated graph data
   *          in .csv files before bulk-loading it to the Neptune target database. DMS maps the SQL
   *          source data to graph data before storing it in these .csv files.</p>
   */
  S3BucketName: string | undefined;

  /**
   * @public
   * <p>A folder path where you want DMS to store migrated graph data in the S3 bucket
   *          specified by <code>S3BucketName</code>
   *          </p>
   */
  S3BucketFolder: string | undefined;

  /**
   * @public
   * <p>The number of milliseconds for DMS to wait to retry a bulk-load of migrated graph
   *          data to the Neptune target database before raising an error. The default is 250.</p>
   */
  ErrorRetryDuration?: number;

  /**
   * @public
   * <p>The maximum size in kilobytes of migrated graph data stored in a .csv file before DMS
   *          bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the
   *          bulk load is successful, DMS clears the bucket, ready to store the next batch of
   *          migrated graph data.</p>
   */
  MaxFileSize?: number;

  /**
   * @public
   * <p>The number of times for DMS to retry a bulk load of migrated graph data to the
   *          Neptune target database before raising an error. The default is 5.</p>
   */
  MaxRetryCount?: number;

  /**
   * @public
   * <p>If you want Identity and Access Management (IAM) authorization enabled for this
   *          endpoint, set this parameter to <code>true</code>. Then attach the appropriate IAM policy
   *          document to your service role specified by <code>ServiceAccessRoleArn</code>. The default
   *          is <code>false</code>.</p>
   */
  IamAuthEnabled?: boolean;
}

/**
 * @public
 * @enum
 */
export const CharLengthSemantics = {
  BYTE: "byte",
  CHAR: "char",
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type CharLengthSemantics = (typeof CharLengthSemantics)[keyof typeof CharLengthSemantics];

/**
 * @public
 * <p>Provides information that defines an Oracle endpoint.</p>
 */
export interface OracleSettings {
  /**
   * @public
   * <p>Set this attribute to set up table-level supplemental logging
   *          for the Oracle database. This attribute enables PRIMARY KEY
   *          supplemental logging on all tables selected for a migration
   *          task.</p>
   *          <p>If you use this option, you still need to enable
   *          database-level supplemental logging.</p>
   */
  AddSupplementalLogging?: boolean;

  /**
   * @public
   * <p>Specifies the ID of the destination for the archived redo logs. This value
   *          should be the same as a number in the dest_id column of the v$archived_log
   *          view. If you work with an additional redo log destination, use the
   *          <code>AdditionalArchivedLogDestId</code> option to specify the additional
   *          destination ID. Doing this improves performance by ensuring that the correct
   *          logs are accessed from the outset.</p>
   */
  ArchivedLogDestId?: number;

  /**
   * @public
   * <p>Set this attribute with <code>ArchivedLogDestId</code> in a primary/
   *          standby setup. This attribute is useful in the case of a
   *          switchover. In this case, DMS needs to know which
   *          destination to get archive redo logs from to read changes.
   *          This need arises because the previous primary instance is
   *          now a standby instance after switchover.</p>
   *          <p>Although DMS supports the use of the Oracle
   *          <code>RESETLOGS</code> option to open the database, never
   *          use <code>RESETLOGS</code> unless necessary. For additional
   *          information about <code>RESETLOGS</code>, see <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B">RMAN Data Repair Concepts</a> in the
   *          <i>Oracle Database Backup and Recovery User's Guide</i>.</p>
   */
  AdditionalArchivedLogDestId?: number;

  /**
   * @public
   * <p>Specifies the IDs of one more destinations for one or more archived redo logs. These IDs
   *          are the values of the <code>dest_id</code> column in the <code>v$archived_log</code> view.
   *          Use this setting with the <code>archivedLogDestId</code> extra connection attribute in a
   *          primary-to-single setup or a primary-to-multiple-standby setup. </p>
   *          <p>This setting is useful in a switchover when you use an Oracle Data Guard database as a
   *          source. In this case, DMS needs information about what destination to get archive redo
   *          logs from to read changes. DMS needs this because after the switchover the previous
   *          primary is a standby instance. For example, in a primary-to-single standby setup you might
   *          apply the following settings. </p>
   *          <p>
   *             <code>archivedLogDestId=1; ExtraArchivedLogDestIds=[2]</code>
   *          </p>
   *          <p>In a primary-to-multiple-standby setup, you might apply the following settings.</p>
   *          <p>
   *             <code>archivedLogDestId=1; ExtraArchivedLogDestIds=[2,3,4]</code>
   *          </p>
   *          <p>Although DMS supports the use of the Oracle <code>RESETLOGS</code> option to open the
   *          database, never use <code>RESETLOGS</code> unless it's necessary. For more information
   *          about <code>RESETLOGS</code>, see <a href="https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B"> RMAN Data Repair Concepts</a> in the <i>Oracle Database Backup and Recovery
   *             User's Guide</i>.</p>
   */
  ExtraArchivedLogDestIds?: number[];

  /**
   * @public
   * <p>Set this attribute to <code>true</code> to enable replication of Oracle
   *          tables containing columns that are nested tables or defined
   *          types.</p>
   */
  AllowSelectNestedTables?: boolean;

  /**
   * @public
   * <p>Set this attribute to change the number of threads that DMS configures to perform a
   *          change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can
   *          specify an integer value between 2 (the default) and 8 (the maximum). Use this attribute
   *          together with the <code>readAheadBlocks</code> attribute.</p>
   */
  ParallelAsmReadThreads?: number;

  /**
   * @public
   * <p>Set this attribute to change the number of read-ahead blocks that DMS configures to
   *          perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
   *          You can specify an integer value between 1000 (the default) and 200,000 (the
   *          maximum).</p>
   */
  ReadAheadBlocks?: number;

  /**
   * @public
   * <p>Set this attribute to <code>false</code> in order to use the Binary Reader
   *          to capture change data for an Amazon RDS for Oracle as the
   *          source. This tells the DMS instance to not access redo logs
   *          through any specified path prefix replacement using direct
   *          file access.</p>
   */
  AccessAlternateDirectly?: boolean;

  /**
   * @public
   * <p>Set this attribute to <code>true</code> in order to use the Binary Reader
   *          to capture change data for an Amazon RDS for Oracle as
   *          the source. This tells the DMS instance to use any specified
   *          prefix replacement to access all online redo logs.</p>
   */
  UseAlternateFolderForOnline?: boolean;

  /**
   * @public
   * <p>Set this string attribute to the required value in order to use
   *          the Binary Reader to capture change data for an Amazon
   *          RDS for Oracle as the source. This value specifies the
   *          default Oracle root used to access the redo logs.</p>
   */
  OraclePathPrefix?: string;

  /**
   * @public
   * <p>Set this string attribute to the required value in order to use
   *          the Binary Reader to capture change data for an Amazon
   *          RDS for Oracle as the source. This value specifies the path
   *          prefix used to replace the default Oracle root to access the
   *          redo logs.</p>
   */
  UsePathPrefix?: string;

  /**
   * @public
   * <p>Set this attribute to true in order to use the Binary Reader
   *          to capture change data for an Amazon RDS for Oracle as the
   *          source. This setting tells DMS instance to replace the default
   *          Oracle root with the specified <code>usePathPrefix</code> setting to
   *          access the redo logs.</p>
   */
  ReplacePathPrefix?: boolean;

  /**
   * @public
   * <p>Set this attribute to enable homogenous tablespace
   *          replication and create existing tables or indexes under the
   *          same tablespace on the target.</p>
   */
  EnableHomogenousTablespace?: boolean;

  /**
   * @public
   * <p>When set to <code>true</code>, this attribute helps to increase the
   *          commit rate on the Oracle target database by writing
   *          directly to tables and not writing a trail to database logs.</p>
   */
  DirectPathNoLog?: boolean;

  /**
   * @public
   * <p>When this field is set to <code>Y</code>, DMS only accesses the
   *          archived redo logs. If the archived redo logs are stored on
   *          Automatic Storage Management (ASM) only, the DMS user account needs to be
   *          granted ASM privileges.</p>
   */
  ArchivedLogsOnly?: boolean;

  /**
   * @public
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
   * @public
   * <p>For an Oracle source endpoint, your ASM server address. You can set this value from the
   *             <code>asm_server</code> value. You set <code>asm_server</code> as part of the extra
   *          connection attribute string to access an Oracle server with Binary Reader that uses ASM.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   */
  AsmServer?: string;

  /**
   * @public
   * <p>For an Oracle source endpoint, your ASM user name. You can set this value from the
   *             <code>asm_user</code> value. You set <code>asm_user</code> as part of the extra
   *          connection attribute string to access an Oracle server with Binary Reader that uses ASM.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   */
  AsmUser?: string;

  /**
   * @public
   * <p>Specifies whether the length of a character column is in
   *          bytes or in characters. To indicate that the character column
   *          length is in characters, set this attribute to <code>CHAR</code>. Otherwise,
   *          the character column length is in bytes.</p>
   *          <p>Example: <code>charLengthSemantics=CHAR;</code>
   *          </p>
   */
  CharLengthSemantics?: CharLengthSemantics;

  /**
   * @public
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>When set to <code>true</code>, this attribute specifies a parallel load
   *          when <code>useDirectPathFullLoad</code> is set to <code>Y</code>. This attribute
   *          also only applies when you use the DMS parallel load
   *          feature.  Note that the target table cannot have any constraints or indexes.</p>
   */
  DirectPathParallelLoad?: boolean;

  /**
   * @public
   * <p>When set to <code>true</code>, this attribute causes a task to fail if the
   *          actual size of an LOB column is greater than the specified
   *          <code>LobMaxSize</code>.</p>
   *          <p>If a task is set to limited LOB mode and this option is set to
   *          <code>true</code>, the task fails instead of truncating the LOB data.</p>
   */
  FailTasksOnLobTruncation?: boolean;

  /**
   * @public
   * <p>Specifies the number scale. You can select a scale up to 38,
   *          or you can select FLOAT. By default, the NUMBER data type
   *          is converted to precision 38, scale 10.</p>
   *          <p>Example: <code>numberDataTypeScale=12</code>
   *          </p>
   */
  NumberDatatypeScale?: number;

  /**
   * @public
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>When set to <code>true</code>, this attribute supports tablespace
   *          replication.</p>
   */
  ReadTableSpaceName?: boolean;

  /**
   * @public
   * <p>Specifies the number of seconds that the system waits
   *          before resending a query.</p>
   *          <p>Example: <code>retryInterval=6;</code>
   *          </p>
   */
  RetryInterval?: number;

  /**
   * @public
   * <p>For an Oracle source endpoint, the transparent data encryption (TDE) password required
   *          by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. It is also the
   *                <code>
   *                <i>TDE_Password</i>
   *             </code> part of the comma-separated value you
   *          set to the <code>Password</code> request parameter when you create the endpoint. The
   *             <code>SecurityDbEncryptian</code> setting is related to this
   *             <code>SecurityDbEncryptionName</code> setting. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for DMS
   *             </a> in the <i>Database Migration Service User Guide</i>. </p>
   */
  SecurityDbEncryption?: string;

  /**
   * @public
   * <p>For an Oracle source endpoint, the name of a key used for the transparent data
   *          encryption (TDE) of the columns and tablespaces in an Oracle source database that is
   *          encrypted using TDE. The key value is the value of the <code>SecurityDbEncryption</code>
   *          setting. For more information on setting the key name value of
   *             <code>SecurityDbEncryptionName</code>, see the information and example for setting the
   *             <code>securityDbEncryptionName</code> extra connection attribute in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for DMS
   *             </a> in the <i>Database Migration Service User
   *          Guide</i>.</p>
   */
  SecurityDbEncryptionName?: string;

  /**
   * @public
   * <p>Fully qualified domain name of the endpoint.</p>
   *          <p>For an Amazon RDS Oracle instance, this is the
   *          output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>,
   *          in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>Use this attribute to convert <code>SDO_GEOMETRY</code> to
   *          <code>GEOJSON</code> format. By default, DMS calls the
   *          <code>SDO2GEOJSON</code> custom function if present and accessible.
   *          Or you can create your own custom function that mimics the operation of
   *          <code>SDOGEOJSON</code> and set
   *          <code>SpatialDataOptionToGeoJsonFunctionName</code> to call it instead. </p>
   */
  SpatialDataOptionToGeoJsonFunctionName?: string;

  /**
   * @public
   * <p>Use this attribute to specify a time in minutes for the delay in standby sync. If the
   *          source is an Oracle Active Data Guard standby database, use this attribute to specify the
   *          time lag between primary and standby databases.</p>
   *          <p>In DMS, you can create an Oracle CDC task that uses an Active Data Guard standby
   *          instance as a source for replicating ongoing changes. Doing this eliminates the need to connect
   *          to an active database that might be in production.</p>
   */
  StandbyDelayTime?: number;

  /**
   * @public
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>Set this attribute to Y to capture change data using the Binary Reader utility. Set
   *             <code>UseLogminerReader</code> to N to set this attribute to Y. To use Binary Reader
   *          with Amazon RDS for Oracle as the source, you set additional attributes. For more information
   *          about using this setting with Oracle Automatic Storage Management (ASM), see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC"> Using Oracle LogMiner or DMS Binary Reader for
   *          CDC</a>.</p>
   */
  UseBFile?: boolean;

  /**
   * @public
   * <p>Set this attribute to Y to have DMS use a direct path full load.
   *          Specify this value to use the direct path protocol in the Oracle Call Interface (OCI).
   *          By using this OCI protocol, you can bulk-load Oracle target tables during a full load.</p>
   */
  UseDirectPathFullLoad?: boolean;

  /**
   * @public
   * <p>Set this attribute to Y to capture change data using the Oracle LogMiner utility (the
   *          default). Set this attribute to N if you want to access the redo logs as a binary file.
   *          When you set <code>UseLogminerReader</code> to N, also set <code>UseBfile</code> to Y. For
   *          more information on this setting and using Oracle ASM, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC"> Using Oracle LogMiner or DMS Binary Reader for CDC</a> in
   *          the <i>DMS User Guide</i>.</p>
   */
  UseLogminerReader?: boolean;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager
   *           secret that allows access to the Oracle endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the Oracle endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN
   *          of the IAM role that specifies DMS as the trusted entity and grants the required
   *          permissions to access the <code>SecretsManagerOracleAsmSecret</code>. This
   *             <code>SecretsManagerOracleAsmSecret</code> has the secret value that allows access to
   *          the Oracle ASM of the endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerOracleAsmSecretId</code>. Or you can
   *             specify clear-text values for <code>AsmUser</code>, <code>AsmPassword</code>, and
   *                <code>AsmServerName</code>. You can't specify both. For more information on
   *             creating this <code>SecretsManagerOracleAsmSecret</code> and the
   *                <code>SecretsManagerOracleAsmAccessRoleArn</code> and
   *                <code>SecretsManagerOracleAsmSecretId</code> required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerOracleAsmAccessRoleArn?: string;

  /**
   * @public
   * <p>Required only if your Oracle endpoint uses Automatic Storage Management (ASM). The full ARN, partial ARN, or friendly name of the <code>SecretsManagerOracleAsmSecret</code>
   *          that contains the Oracle ASM connection details for the Oracle endpoint.</p>
   */
  SecretsManagerOracleAsmSecretId?: string;

  /**
   * @public
   * <p>Use the <code>TrimSpaceInChar</code> source endpoint setting to trim data
   *          on CHAR and NCHAR data types during migration. The default value is <code>true</code>.</p>
   */
  TrimSpaceInChar?: boolean;

  /**
   * @public
   * <p>When true, converts timestamps with the <code>timezone</code> datatype to their UTC value.</p>
   */
  ConvertTimestampWithZoneToUTC?: boolean;

  /**
   * @public
   * <p>The timeframe in minutes to check for open transactions for a CDC-only task.</p>
   *          <p>You can
   *          specify an integer value between 0 (the default) and 240 (the maximum). </p>
   *          <note>
   *             <p>This parameter is only valid in DMS version 3.5.0 and later. DMS supports
   *       a window of up to 9.5 hours including the value for <code>OpenTransactionWindow</code>.</p>
   *          </note>
   */
  OpenTransactionWindow?: number;
}

/**
 * @public
 * @enum
 */
export const DatabaseMode = {
  BABELFISH: "babelfish",
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type DatabaseMode = (typeof DatabaseMode)[keyof typeof DatabaseMode];

/**
 * @public
 * @enum
 */
export const LongVarcharMappingType = {
  CLOB: "clob",
  NCLOB: "nclob",
  WSTRING: "wstring",
} as const;

/**
 * @public
 */
export type LongVarcharMappingType = (typeof LongVarcharMappingType)[keyof typeof LongVarcharMappingType];

/**
 * @public
 * @enum
 */
export const PluginNameValue = {
  NO_PREFERENCE: "no-preference",
  PGLOGICAL: "pglogical",
  TEST_DECODING: "test-decoding",
} as const;

/**
 * @public
 */
export type PluginNameValue = (typeof PluginNameValue)[keyof typeof PluginNameValue];

/**
 * @public
 * <p>Provides information that defines a PostgreSQL endpoint.</p>
 */
export interface PostgreSQLSettings {
  /**
   * @public
   * <p>For use with change data capture (CDC) only, this attribute
   *          has DMS bypass foreign keys and user triggers to
   *          reduce the time it takes to bulk load data.</p>
   *          <p>Example: <code>afterConnectScript=SET
   *          session_replication_role='replica'</code>
   *          </p>
   */
  AfterConnectScript?: string;

  /**
   * @public
   * <p>To capture DDL events, DMS creates various artifacts in
   *          the PostgreSQL database when the task starts. You can later
   *          remove these artifacts.</p>
   *          <p>If this value is set to <code>N</code>, you don't have to create tables or
   *          triggers on the source database.</p>
   */
  CaptureDdls?: boolean;

  /**
   * @public
   * <p>Specifies the maximum size (in KB) of any .csv file used to
   *          transfer data to PostgreSQL.</p>
   *          <p>Example: <code>maxFileSize=512</code>
   *          </p>
   */
  MaxFileSize?: number;

  /**
   * @public
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The schema in which the operational DDL database artifacts
   *          are created.</p>
   *          <p>Example: <code>ddlArtifactsSchema=xyzddlschema;</code>
   *          </p>
   */
  DdlArtifactsSchema?: string;

  /**
   * @public
   * <p>Sets the client statement timeout for the PostgreSQL
   *          instance, in seconds. The default value is 60 seconds.</p>
   *          <p>Example: <code>executeTimeout=100;</code>
   *          </p>
   */
  ExecuteTimeout?: number;

  /**
   * @public
   * <p>When set to <code>true</code>, this value causes a task to fail if the
   *          actual size of a LOB column is greater than the specified
   *          <code>LobMaxSize</code>.</p>
   *          <p>If task is set to Limited LOB mode and this option is set to
   *          true, the task fails instead of truncating the LOB data.</p>
   */
  FailTasksOnLobTruncation?: boolean;

  /**
   * @public
   * <p>The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this,
   *          it prevents idle logical replication slots from holding onto old WAL logs, which can result in
   *          storage full situations on the source. This heartbeat keeps <code>restart_lsn</code> moving
   *          and prevents storage full scenarios.</p>
   */
  HeartbeatEnable?: boolean;

  /**
   * @public
   * <p>Sets the schema in which the heartbeat artifacts are created.</p>
   */
  HeartbeatSchema?: string;

  /**
   * @public
   * <p>Sets the WAL heartbeat frequency (in minutes).</p>
   */
  HeartbeatFrequency?: number;

  /**
   * @public
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Endpoint TCP port. The default is 5432.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The host name of the endpoint database. </p>
   *          <p>For an Amazon RDS PostgreSQL instance, this is the
   *          output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html">DescribeDBInstances</a>,
   *          in the <code>
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Endpoint.html">Endpoint</a>.Address</code> field.</p>
   *          <p>For an Aurora PostgreSQL instance, this is the
   *          output of <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html">DescribeDBClusters</a>,
   *          in the <code>Endpoint</code> field.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>Sets the name of a previously created logical replication slot
   *          for a change data capture (CDC) load of the PostgreSQL source instance. </p>
   *          <p>When used with the <code>CdcStartPosition</code>
   *          request parameter for the DMS API , this attribute also makes it possible to use native CDC
   *          start points. DMS verifies that the specified logical
   *          replication slot exists before starting the CDC load task. It
   *          also verifies that the task was created with a valid setting of
   *          <code>CdcStartPosition</code>. If the specified slot
   *          doesn't exist or the task doesn't have a valid
   *          <code>CdcStartPosition</code> setting, DMS raises an
   *          error.</p>
   *          <p>For more information about setting the <code>CdcStartPosition</code> request parameter,
   *          see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native">Determining a CDC native start point</a> in the <i>Database Migration Service User
   *             Guide</i>. For more information about using <code>CdcStartPosition</code>, see
   *             <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html">CreateReplicationTask</a>, <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">StartReplicationTask</a>, and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html">ModifyReplicationTask</a>.</p>
   */
  SlotName?: string;

  /**
   * @public
   * <p>Specifies the plugin to use to create a replication slot.</p>
   */
  PluginName?: PluginNameValue;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager
   *           secret that allows access to the PostgreSQL endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the PostgreSQL endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>Use the <code>TrimSpaceInChar</code> source endpoint setting to trim data
   *          on CHAR and NCHAR data types during migration. The default value is <code>true</code>.</p>
   */
  TrimSpaceInChar?: boolean;

  /**
   * @public
   * <p>When true, lets PostgreSQL migrate the boolean type as boolean. By default, PostgreSQL migrates booleans as
   *          <code>varchar(5)</code>. You must set this setting on both the source and target endpoints for it to take effect.</p>
   */
  MapBooleanAsBoolean?: boolean;

  /**
   * @public
   * <p>When true, DMS migrates JSONB values as CLOB.</p>
   */
  MapJsonbAsClob?: boolean;

  /**
   * @public
   * <p>When true, DMS migrates LONG values as VARCHAR.</p>
   */
  MapLongVarcharAs?: LongVarcharMappingType;

  /**
   * @public
   * <p>Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.</p>
   */
  DatabaseMode?: DatabaseMode;

  /**
   * @public
   * <p>The Babelfish for Aurora PostgreSQL database name for the endpoint.</p>
   */
  BabelfishDatabaseName?: string;
}

/**
 * @public
 * @enum
 */
export const RedisAuthTypeValue = {
  AUTH_ROLE: "auth-role",
  AUTH_TOKEN: "auth-token",
  NONE: "none",
} as const;

/**
 * @public
 */
export type RedisAuthTypeValue = (typeof RedisAuthTypeValue)[keyof typeof RedisAuthTypeValue];

/**
 * @public
 * @enum
 */
export const SslSecurityProtocolValue = {
  PLAINTEXT: "plaintext",
  SSL_ENCRYPTION: "ssl-encryption",
} as const;

/**
 * @public
 */
export type SslSecurityProtocolValue = (typeof SslSecurityProtocolValue)[keyof typeof SslSecurityProtocolValue];

/**
 * @public
 * <p>Provides information that defines a Redis target endpoint.</p>
 */
export interface RedisSettings {
  /**
   * @public
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName: string | undefined;

  /**
   * @public
   * <p>Transmission Control Protocol (TCP) port for the endpoint.</p>
   */
  Port: number | undefined;

  /**
   * @public
   * <p>The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid
   *          values include <code>plaintext</code> and <code>ssl-encryption</code>. The default is
   *             <code>ssl-encryption</code>. The <code>ssl-encryption</code> option makes an encrypted
   *          connection. Optionally, you can identify an Amazon Resource Name (ARN) for an SSL certificate authority (CA)
   *           using the <code>SslCaCertificateArn </code>setting. If an ARN isn't given for a CA, DMS
   *          uses the Amazon root CA.</p>
   *          <p>The <code>plaintext</code> option doesn't provide Transport Layer Security (TLS)
   *          encryption for traffic between endpoint and database.</p>
   */
  SslSecurityProtocol?: SslSecurityProtocolValue;

  /**
   * @public
   * <p>The type of authentication to perform when connecting to a Redis target. Options include
   *             <code>none</code>, <code>auth-token</code>, and <code>auth-role</code>. The
   *             <code>auth-token</code> option requires an <code>AuthPassword</code> value to be provided. The
   *          <code>auth-role</code> option requires <code>AuthUserName</code> and <code>AuthPassword</code> values
   *          to be provided.</p>
   */
  AuthType?: RedisAuthTypeValue;

  /**
   * @public
   * <p>The user name provided with the <code>auth-role</code> option of the
   *          <code>AuthType</code> setting for a Redis target endpoint.</p>
   */
  AuthUserName?: string;

  /**
   * @public
   * <p>The password provided with the <code>auth-role</code> and
   *          <code>auth-token</code> options of the <code>AuthType</code> setting for a Redis
   *          target endpoint.</p>
   */
  AuthPassword?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to
   *          connect to your Redis target endpoint.</p>
   */
  SslCaCertificateArn?: string;
}

/**
 * @public
 * @enum
 */
export const EncryptionModeValue = {
  SSE_KMS: "sse-kms",
  SSE_S3: "sse-s3",
} as const;

/**
 * @public
 */
export type EncryptionModeValue = (typeof EncryptionModeValue)[keyof typeof EncryptionModeValue];

/**
 * @public
 * <p>Provides information that defines an Amazon Redshift endpoint.</p>
 */
export interface RedshiftSettings {
  /**
   * @public
   * <p>A value that indicates to allow any date format, including invalid formats such as
   *          00/00/00 00:00:00, to be loaded without generating an error. You can choose
   *             <code>true</code> or <code>false</code> (the default).</p>
   *          <p>This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with
   *          the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT
   *          specification, Amazon Redshift inserts a NULL value into that field. </p>
   */
  AcceptAnyDate?: boolean;

  /**
   * @public
   * <p>Code to run after connecting. This parameter should contain the code itself, not the
   *          name of a file containing the code.</p>
   */
  AfterConnectScript?: string;

  /**
   * @public
   * <p>An S3 folder where the comma-separated-value (.csv) files are stored before being
   *          uploaded to the target Redshift cluster. </p>
   *          <p>For full load mode, DMS converts source records into .csv files and loads them to
   *          the <i>BucketFolder/TableID</i> path. DMS uses the Redshift
   *             <code>COPY</code> command to upload the .csv files to the target table. The files are
   *          deleted once the <code>COPY</code> operation has finished. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">COPY</a> in the
   *             <i>Amazon Redshift Database Developer Guide</i>.</p>
   *          <p>For change-data-capture (CDC) mode, DMS creates a <i>NetChanges</i> table,
   *          and loads the .csv files to this <i>BucketFolder/NetChangesTableID</i> path.</p>
   */
  BucketFolder?: string;

  /**
   * @public
   * <p>The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.</p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>If Amazon Redshift is configured to support case sensitive schema names, set
   *             <code>CaseSensitiveNames</code> to <code>true</code>. The default is
   *          <code>false</code>.</p>
   */
  CaseSensitiveNames?: boolean;

  /**
   * @public
   * <p>If you set <code>CompUpdate</code> to <code>true</code> Amazon Redshift applies
   *          automatic compression if the table is empty. This applies even if the table columns already
   *          have encodings other than <code>RAW</code>. If you set <code>CompUpdate</code> to
   *             <code>false</code>, automatic compression is disabled and existing column encodings
   *          aren't changed. The default is <code>true</code>.</p>
   */
  CompUpdate?: boolean;

  /**
   * @public
   * <p>A value that sets the amount of time to wait (in milliseconds) before timing out,
   *          beginning from when you initially establish a connection.</p>
   */
  ConnectionTimeout?: number;

  /**
   * @public
   * <p>The name of the Amazon Redshift data warehouse (service) that you are working
   *          with.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The date format that you are using. Valid values are <code>auto</code> (case-sensitive),
   *          your date format string enclosed in quotes, or NULL. If this parameter is left unset
   *          (NULL), it defaults to a format of 'YYYY-MM-DD'. Using <code>auto</code> recognizes most
   *          strings, even some that aren't supported when you use a date format string. </p>
   *          <p>If your date and time values use formats different from each other, set this to
   *          <code>auto</code>. </p>
   */
  DateFormat?: string;

  /**
   * @public
   * <p>A value that specifies whether DMS should migrate empty CHAR and VARCHAR fields as
   *          NULL. A value of <code>true</code> sets empty CHAR and VARCHAR fields to null. The default
   *          is <code>false</code>.</p>
   */
  EmptyAsNull?: boolean;

  /**
   * @public
   * <p>The type of server-side encryption that you want to use for your data. This encryption
   *          type is part of the endpoint settings or the extra connections attributes for Amazon S3.
   *          You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. </p>
   *          <note>
   *             <p>For the <code>ModifyEndpoint</code> operation, you can change the existing value of the
   *                <code>EncryptionMode</code> parameter from <code>SSE_KMS</code> to
   *                <code>SSE_S3</code>. But you can’t change the existing value from <code>SSE_S3</code>
   *             to <code>SSE_KMS</code>.</p>
   *          </note>
   *          <p>To use <code>SSE_S3</code>, create an Identity and Access Management (IAM) role with
   *          a policy that allows <code>"arn:aws:s3:::*"</code> to use the following actions:
   *             <code>"s3:PutObject", "s3:ListBucket"</code>
   *          </p>
   */
  EncryptionMode?: EncryptionModeValue;

  /**
   * @public
   * <p>This setting is only valid for a full-load migration task. Set <code>ExplicitIds</code>
   *          to <code>true</code> to have tables with <code>IDENTITY</code> columns override their
   *          auto-generated values with explicit values loaded from the source data files used to
   *          populate the tables. The default is <code>false</code>.</p>
   */
  ExplicitIds?: boolean;

  /**
   * @public
   * <p>The number of threads used to upload a single file. This parameter accepts a value from
   *          1 through 64. It defaults to 10.</p>
   *          <p>The number of parallel streams used to upload a single .csv file to an S3 bucket using
   *          S3 Multipart Upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart upload
   *             overview</a>. </p>
   *          <p>
   *             <code>FileTransferUploadStreams</code> accepts a value from 1 through 64. It
   *          defaults to 10.</p>
   */
  FileTransferUploadStreams?: number;

  /**
   * @public
   * <p>The amount of time to wait (in milliseconds) before timing out of operations performed
   *             by DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.</p>
   */
  LoadTimeout?: number;

  /**
   * @public
   * <p>The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer
   *             data to Amazon Redshift. It defaults to 1048576KB (1 GB).</p>
   */
  MaxFileSize?: number;

  /**
   * @public
   * <p>The password for the user named in the <code>username</code> property.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The port number for Amazon Redshift. The default value is 5439.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>A value that specifies to remove surrounding quotation marks from strings in the
   *          incoming data. All characters within the quotation marks, including delimiters, are
   *          retained. Choose <code>true</code> to remove quotation marks. The default is
   *             <code>false</code>.</p>
   */
  RemoveQuotes?: boolean;

  /**
   * @public
   * <p>A list of characters that you want to replace. Use with
   *          <code>ReplaceChars</code>.</p>
   */
  ReplaceInvalidChars?: string;

  /**
   * @public
   * <p>A value that specifies to replaces the invalid characters specified in
   *          <code>ReplaceInvalidChars</code>, substituting the specified characters instead. The
   *          default is <code>"?"</code>.</p>
   */
  ReplaceChars?: string;

  /**
   * @public
   * <p>The name of the Amazon Redshift cluster you are using.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift
   *          service. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>The KMS key ID. If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>,
   *          provide this key ID. The key that you use needs an attached policy that enables IAM user
   *          permissions and allows use of the key.</p>
   */
  ServerSideEncryptionKmsKeyId?: string;

  /**
   * @public
   * <p>The time format that you want to use. Valid values are <code>auto</code>
   *          (case-sensitive), <code>'timeformat_string'</code>, <code>'epochsecs'</code>, or
   *          <code>'epochmillisecs'</code>. It defaults to 10. Using <code>auto</code> recognizes
   *          most strings, even some that aren't supported when you use a time format string. </p>
   *          <p>If your date and time values use formats different from each other, set this parameter
   *          to <code>auto</code>. </p>
   */
  TimeFormat?: string;

  /**
   * @public
   * <p>A value that specifies to remove the trailing white space characters from a VARCHAR
   *          string. This parameter applies only to columns with a VARCHAR data type. Choose
   *             <code>true</code> to remove unneeded white space. The default is
   *          <code>false</code>.</p>
   */
  TrimBlanks?: boolean;

  /**
   * @public
   * <p>A value that specifies to truncate data in columns to the appropriate number of
   *          characters, so that the data fits in the column. This parameter applies only to columns
   *          with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose
   *             <code>true</code> to truncate data. The default is <code>false</code>.</p>
   */
  TruncateColumns?: boolean;

  /**
   * @public
   * <p>An Amazon Redshift user name for a registered user.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The size (in KB) of the in-memory file write buffer used when generating .csv files
   *          on the local disk at the DMS replication instance. The default value is 1000
   *          (buffer size is 1000KB).</p>
   */
  WriteBufferSize?: number;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager secret that allows access to the Amazon Redshift endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the Amazon Redshift endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>When true, lets Redshift migrate the boolean type as boolean. By default, Redshift migrates booleans as
   *          <code>varchar(1)</code>. You must set this setting on both the source and target endpoints for it to take effect.</p>
   */
  MapBooleanAsBoolean?: boolean;
}

/**
 * @public
 * @enum
 */
export const CannedAclForObjectsValue = {
  AUTHENTICATED_READ: "authenticated-read",
  AWS_EXEC_READ: "aws-exec-read",
  BUCKET_OWNER_FULL_CONTROL: "bucket-owner-full-control",
  BUCKET_OWNER_READ: "bucket-owner-read",
  NONE: "none",
  PRIVATE: "private",
  PUBLIC_READ: "public-read",
  PUBLIC_READ_WRITE: "public-read-write",
} as const;

/**
 * @public
 */
export type CannedAclForObjectsValue = (typeof CannedAclForObjectsValue)[keyof typeof CannedAclForObjectsValue];

/**
 * @public
 * @enum
 */
export const CompressionTypeValue = {
  GZIP: "gzip",
  NONE: "none",
} as const;

/**
 * @public
 */
export type CompressionTypeValue = (typeof CompressionTypeValue)[keyof typeof CompressionTypeValue];

/**
 * @public
 * @enum
 */
export const DataFormatValue = {
  CSV: "csv",
  PARQUET: "parquet",
} as const;

/**
 * @public
 */
export type DataFormatValue = (typeof DataFormatValue)[keyof typeof DataFormatValue];

/**
 * @public
 * @enum
 */
export const DatePartitionDelimiterValue = {
  DASH: "DASH",
  NONE: "NONE",
  SLASH: "SLASH",
  UNDERSCORE: "UNDERSCORE",
} as const;

/**
 * @public
 */
export type DatePartitionDelimiterValue =
  (typeof DatePartitionDelimiterValue)[keyof typeof DatePartitionDelimiterValue];

/**
 * @public
 * @enum
 */
export const DatePartitionSequenceValue = {
  DDMMYYYY: "DDMMYYYY",
  MMYYYYDD: "MMYYYYDD",
  YYYYMM: "YYYYMM",
  YYYYMMDD: "YYYYMMDD",
  YYYYMMDDHH: "YYYYMMDDHH",
} as const;

/**
 * @public
 */
export type DatePartitionSequenceValue = (typeof DatePartitionSequenceValue)[keyof typeof DatePartitionSequenceValue];

/**
 * @public
 * @enum
 */
export const EncodingTypeValue = {
  PLAIN: "plain",
  PLAIN_DICTIONARY: "plain-dictionary",
  RLE_DICTIONARY: "rle-dictionary",
} as const;

/**
 * @public
 */
export type EncodingTypeValue = (typeof EncodingTypeValue)[keyof typeof EncodingTypeValue];

/**
 * @public
 * @enum
 */
export const ParquetVersionValue = {
  PARQUET_1_0: "parquet-1-0",
  PARQUET_2_0: "parquet-2-0",
} as const;

/**
 * @public
 */
export type ParquetVersionValue = (typeof ParquetVersionValue)[keyof typeof ParquetVersionValue];

/**
 * @public
 * <p>Settings for exporting data to Amazon S3. </p>
 */
export interface S3Settings {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) used by the service to access the IAM role.
   *          The role must allow the <code>iam:PassRole</code> action. It is a required
   *          parameter that enables DMS to write and read objects from an S3 bucket.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p> Specifies how tables are defined in the S3 source files only. </p>
   */
  ExternalTableDefinition?: string;

  /**
   * @public
   * <p> The delimiter used to separate rows in the .csv file for both source and target. The default is a carriage
   *          return (<code>\n</code>). </p>
   */
  CsvRowDelimiter?: string;

  /**
   * @public
   * <p> The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.
   *       </p>
   */
  CsvDelimiter?: string;

  /**
   * @public
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
   * @public
   * <p> The name of the S3 bucket. </p>
   */
  BucketName?: string;

  /**
   * @public
   * <p>An optional parameter to use GZIP to compress the target files. Set to GZIP to compress
   *          the target files. Either set this parameter to NONE (the default) or don't use it to leave the files uncompressed.
   *          This parameter applies to both .csv and .parquet file formats. </p>
   */
  CompressionType?: CompressionTypeValue;

  /**
   * @public
   * <p>The type of server-side encryption that you want to use for your data. This encryption
   *          type is part of the endpoint settings or the extra connections attributes for Amazon S3.
   *          You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. </p>
   *          <note>
   *             <p>For the <code>ModifyEndpoint</code> operation, you can change the existing value of
   *             the <code>EncryptionMode</code> parameter from <code>SSE_KMS</code> to
   *                <code>SSE_S3</code>. But you can’t change the existing value from <code>SSE_S3</code>
   *             to <code>SSE_KMS</code>.</p>
   *          </note>
   *          <p>To use <code>SSE_S3</code>, you need an Identity and Access Management (IAM) role
   *          with permission to allow <code>"arn:aws:s3:::dms-*"</code> to use the following
   *          actions:</p>
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
  EncryptionMode?: EncryptionModeValue;

  /**
   * @public
   * <p>If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>, provide the
   *          KMS key ID. The key that you use needs an attached policy that enables Identity and Access Management
   *          (IAM) user permissions and allows use of the key.</p>
   *          <p>Here is a CLI example: <code>aws dms create-endpoint --endpoint-identifier
   *                <i>value</i> --endpoint-type target --engine-name s3 --s3-settings
   *                ServiceAccessRoleArn=<i>value</i>,BucketFolder=<i>value</i>,BucketName=<i>value</i>,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=<i>value</i>
   *             </code>
   *          </p>
   */
  ServerSideEncryptionKmsKeyId?: string;

  /**
   * @public
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
  DataFormat?: DataFormatValue;

  /**
   * @public
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
  EncodingType?: EncodingTypeValue;

  /**
   * @public
   * <p>The maximum size of an encoded dictionary page of a column. If the dictionary page
   *          exceeds this, this column is stored using an encoding type of <code>PLAIN</code>. This
   *          parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page
   *          before it reverts to <code>PLAIN</code> encoding. This size is used for
   *            .parquet file format only. </p>
   */
  DictPageSizeLimit?: number;

  /**
   * @public
   * <p>The number of rows in a row group. A smaller row group size provides faster reads. But
   *          as the number of row groups grows, the slower writes become. This parameter defaults to
   *          10,000 rows. This number is used for .parquet file format only. </p>
   *          <p>If you choose a value larger than the maximum, <code>RowGroupLength</code> is set to the
   *          max row group length in bytes (64 * 1024 * 1024). </p>
   */
  RowGroupLength?: number;

  /**
   * @public
   * <p>The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB).
   *          This number is used for .parquet file format only. </p>
   */
  DataPageSize?: number;

  /**
   * @public
   * <p>The version of the Apache Parquet format that you want to use: <code>parquet_1_0</code>
   *          (the default) or <code>parquet_2_0</code>.</p>
   */
  ParquetVersion?: ParquetVersionValue;

  /**
   * @public
   * <p>A value that enables statistics for Parquet pages and row groups. Choose
   *             <code>true</code> to enable statistics, <code>false</code> to disable. Statistics
   *          include <code>NULL</code>, <code>DISTINCT</code>, <code>MAX</code>, and <code>MIN</code>
   *          values. This parameter defaults to <code>true</code>. This value is used for
   *             .parquet file format only.</p>
   */
  EnableStatistics?: boolean;

  /**
   * @public
   * <p>A value that enables a full load to write INSERT operations to the comma-separated value
   *          (.csv) or .parquet output files only to indicate how the rows were added to the source database.</p>
   *          <note>
   *             <p>DMS supports the <code>IncludeOpForFullLoad</code> parameter in versions 3.1.4 and
   *             later.</p>
   *             <p>DMS supports the use of the .parquet files with the <code>IncludeOpForFullLoad</code>
   *             parameter in versions 3.4.7 and later.</p>
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
   *             information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service
   *                    User Guide.</i>.</p>
   *          </note>
   */
  IncludeOpForFullLoad?: boolean;

  /**
   * @public
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
   *          together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service User Guide.</i>.</p>
   *          <note>
   *             <p>DMS supports the interaction described preceding between the
   *                <code>CdcInsertsOnly</code> and <code>IncludeOpForFullLoad</code> parameters in
   *             versions 3.1.4 and later. </p>
   *             <p>
   *                <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can't
   *             both be set to <code>true</code> for the same endpoint. Set either
   *                <code>CdcInsertsOnly</code> or <code>CdcInsertsAndUpdates</code> to <code>true</code>
   *             for the same endpoint, but not both.</p>
   *          </note>
   */
  CdcInsertsOnly?: boolean;

  /**
   * @public
   * <p>A value that when nonblank causes DMS to add a column with timestamp information to
   *          the endpoint data for an Amazon S3 target.</p>
   *          <note>
   *             <p>DMS supports the <code>TimestampColumnName</code> parameter in versions 3.1.4 and later.</p>
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
   * @public
   * <p>A value that specifies the precision of any <code>TIMESTAMP</code> column values that
   *          are written to an Amazon S3 object file in .parquet format.</p>
   *          <note>
   *             <p>DMS supports the <code>ParquetTimestampInMillisecond</code> parameter in versions
   *             3.1.4 and later.</p>
   *          </note>
   *          <p>When <code>ParquetTimestampInMillisecond</code> is set to <code>true</code> or
   *             <code>y</code>, DMS writes all <code>TIMESTAMP</code> columns in a .parquet
   *          formatted file with millisecond precision. Otherwise, DMS writes them with microsecond
   *          precision.</p>
   *          <p>Currently, Amazon Athena and Glue can handle only
   *          millisecond precision for <code>TIMESTAMP</code> values. Set
   *          this parameter to <code>true</code> for S3 endpoint object
   *          files that are .parquet formatted only if you plan to query or process the data with Athena or Glue.</p>
   *          <note>
   *             <p>DMS writes any <code>TIMESTAMP</code> column
   *                   values written to an S3 file in .csv format with
   *                   microsecond precision.</p>
   *             <p>Setting <code>ParquetTimestampInMillisecond</code> has no effect on the string
   *             format of the timestamp column value that is inserted by setting the
   *                <code>TimestampColumnName</code> parameter.</p>
   *          </note>
   */
  ParquetTimestampInMillisecond?: boolean;

  /**
   * @public
   * <p>A value that enables a change data capture (CDC) load to write INSERT and UPDATE
   *          operations to .csv or .parquet (columnar storage) output files. The default setting is
   *             <code>false</code>, but when <code>CdcInsertsAndUpdates</code> is set to
   *             <code>true</code> or <code>y</code>, only INSERTs and UPDATEs from the source database
   *          are migrated to the .csv or .parquet file.</p>
   *          <important>
   *             <p>DMS supports the use of the .parquet files in versions 3.4.7 and later.</p>
   *          </important>
   *          <p>How these INSERTs and UPDATEs are recorded depends on the
   *          value of the <code>IncludeOpForFullLoad</code> parameter. If
   *             <code>IncludeOpForFullLoad</code> is set to <code>true</code>, the first field of every
   *          CDC record is set to either <code>I</code> or <code>U</code> to indicate INSERT and UPDATE
   *          operations at the source. But if <code>IncludeOpForFullLoad</code> is set to
   *             <code>false</code>, CDC records are written without an indication of INSERT or UPDATE
   *          operations at the source. For more information about how these settings work together, see
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>Database Migration Service User Guide.</i>.</p>
   *          <note>
   *             <p>DMS supports the use of the <code>CdcInsertsAndUpdates</code> parameter in
   *             versions 3.3.1 and later.</p>
   *             <p>
   *                <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can't
   *             both be set to <code>true</code> for the same endpoint. Set either
   *             <code>CdcInsertsOnly</code> or <code>CdcInsertsAndUpdates</code> to <code>true</code>
   *             for the same endpoint, but not both.</p>
   *          </note>
   */
  CdcInsertsAndUpdates?: boolean;

  /**
   * @public
   * <p>When set to <code>true</code>, this parameter partitions S3 bucket folders based on
   *          transaction commit dates. The default value is <code>false</code>. For more information
   *          about date-based folder partitioning, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.DatePartitioning">Using date-based folder partitioning</a>.</p>
   */
  DatePartitionEnabled?: boolean;

  /**
   * @public
   * <p>Identifies the sequence of the date format to use during folder partitioning. The default value is
   *          <code>YYYYMMDD</code>. Use this parameter when <code>DatePartitionedEnabled</code> is set to <code>true</code>.</p>
   */
  DatePartitionSequence?: DatePartitionSequenceValue;

  /**
   * @public
   * <p>Specifies a date separating delimiter to use during folder partitioning. The default value is
   *          <code>SLASH</code>. Use this parameter when <code>DatePartitionedEnabled</code> is set to <code>true</code>.</p>
   */
  DatePartitionDelimiter?: DatePartitionDelimiterValue;

  /**
   * @public
   * <p>This setting applies if the S3 output files during a change data capture (CDC) load are
   *          written in .csv format. If set to <code>true</code> for columns not included in the
   *          supplemental log, DMS uses the value specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CsvNoSupValue">
   *                <code>CsvNoSupValue</code>
   *             </a>. If not set or set to
   *             <code>false</code>, DMS uses the null value for these columns.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.1 and later.</p>
   *          </note>
   */
  UseCsvNoSupValue?: boolean;

  /**
   * @public
   * <p>This setting only applies if your Amazon S3 output files during a change data capture
   *          (CDC) load are written in .csv format. If <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-UseCsvNoSupValue">
   *                <code>UseCsvNoSupValue</code>
   *             </a> is set to true, specify a
   *          string value that you want DMS to use for all columns not included in the supplemental
   *          log. If you do not specify a string value, DMS uses the null value for these columns
   *          regardless of the <code>UseCsvNoSupValue</code> setting.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.1 and later.</p>
   *          </note>
   */
  CsvNoSupValue?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, DMS saves the transaction order for a change data
   *          capture (CDC) load on the Amazon S3 target specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath">
   *                <code>CdcPath</code>
   *             </a>. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath">Capturing data changes (CDC) including transaction order on the S3
   *             target</a>.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.2 and later.</p>
   *          </note>
   */
  PreserveTransactions?: boolean;

  /**
   * @public
   * <p>Specifies the folder path of CDC files. For an S3 source, this setting is required if a
   *          task captures change data; otherwise, it's optional. If <code>CdcPath</code> is set, DMS
   *           reads CDC files from this path and replicates the data changes to the target endpoint.
   *          For an S3 target if you set <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions">
   *                <code>PreserveTransactions</code>
   *             </a> to <code>true</code>, DMS
   *           verifies that you have set this parameter to a folder path on your S3 target where DMS
   *           can save the transaction order for the CDC load. DMS creates this CDC folder path
   *          in either your S3 target working directory or the S3 target location specified by <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder">
   *                <code>BucketFolder</code>
   *             </a> and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName">
   *                <code>BucketName</code>
   *             </a>.</p>
   *          <p>For example, if you specify <code>CdcPath</code> as <code>MyChangedData</code>, and you
   *          specify <code>BucketName</code> as <code>MyTargetBucket</code> but do not specify
   *             <code>BucketFolder</code>, DMS creates the CDC folder path following:
   *             <code>MyTargetBucket/MyChangedData</code>.</p>
   *          <p>If you specify the same <code>CdcPath</code>, and you specify <code>BucketName</code> as
   *             <code>MyTargetBucket</code> and <code>BucketFolder</code> as <code>MyTargetData</code>,
   *          DMS creates the CDC folder path following:
   *             <code>MyTargetBucket/MyTargetData/MyChangedData</code>.</p>
   *          <p>For more information on CDC including transaction order on an S3 target, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath">Capturing data changes (CDC) including transaction order on the S3
   *             target</a>.</p>
   *          <note>
   *             <p>This setting is supported in DMS versions 3.4.2 and later.</p>
   *          </note>
   */
  CdcPath?: string;

  /**
   * @public
   * <p>When set to true, this parameter uses the task start time as the timestamp column value instead of
   *          the time data is written to target. For full load, when <code>useTaskStartTimeForFullLoadTimestamp</code>
   *          is set to <code>true</code>, each row of the timestamp column contains the task start time. For CDC loads,
   *          each row of the timestamp column contains the transaction commit time.</p>
   *          <p>When <code>useTaskStartTimeForFullLoadTimestamp</code> is set to <code>false</code>, the full load timestamp
   *          in the timestamp column increments with the time data arrives at the target. </p>
   */
  UseTaskStartTimeForFullLoadTimestamp?: boolean;

  /**
   * @public
   * <p>A value that enables DMS to specify a predefined (canned) access control list for
   *          objects created in an Amazon S3 bucket as .csv or .parquet files. For more information
   *          about Amazon S3 canned ACLs, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">Canned
   *             ACL</a> in the <i>Amazon S3 Developer Guide.</i>
   *          </p>
   *          <p>The default value is NONE. Valid values include NONE, PRIVATE,
   *          PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ,
   *          AWS_EXEC_READ, BUCKET_OWNER_READ, and
   *          BUCKET_OWNER_FULL_CONTROL.</p>
   */
  CannedAclForObjects?: CannedAclForObjectsValue;

  /**
   * @public
   * <p>An optional parameter that, when set to <code>true</code> or <code>y</code>, you can use
   *          to add column name information to the .csv output file.</p>
   *          <p>The default value is <code>false</code>. Valid values are <code>true</code>, <code>false</code>,
   *          <code>y</code>, and <code>n</code>.</p>
   */
  AddColumnName?: boolean;

  /**
   * @public
   * <p>Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.</p>
   *          <p>When <code>CdcMaxBatchInterval</code> and <code>CdcMinFileSize</code> are both specified, the
   *          file write is triggered by whichever parameter condition is met first within an DMS
   *          CloudFormation template.</p>
   *          <p>The default value is 60 seconds.</p>
   */
  CdcMaxBatchInterval?: number;

  /**
   * @public
   * <p>Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.</p>
   *          <p>When <code>CdcMinFileSize</code> and <code>CdcMaxBatchInterval</code> are both specified, the file
   *          write is triggered by whichever parameter condition is met first within an DMS
   *          CloudFormation template.</p>
   *          <p>The default value is 32 MB.</p>
   */
  CdcMinFileSize?: number;

  /**
   * @public
   * <p>An optional parameter that specifies how DMS treats null
   *          values. While handling the null value, you can use this
   *          parameter to pass a user-defined string as null when writing to
   *          the target. For example, when target columns are nullable,
   *          you can use this option to differentiate between the empty
   *          string value and the null value. So, if you set this parameter
   *          value to the empty string ("" or ''), DMS treats the empty
   *          string as the null value instead of <code>NULL</code>.</p>
   *          <p>The default value is <code>NULL</code>. Valid values include any valid string.</p>
   */
  CsvNullValue?: string;

  /**
   * @public
   * <p>When this value is set to 1, DMS ignores the first row header in a .csv file. A value
   *          of 1 turns on the feature; a value of 0 turns off the feature.</p>
   *          <p>The default is 0.</p>
   */
  IgnoreHeaderRows?: number;

  /**
   * @public
   * <p>A value that specifies the maximum size (in KB) of any .csv
   *          file to be created while migrating to an S3 target during full
   *          load.</p>
   *          <p>The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.</p>
   */
  MaxFileSize?: number;

  /**
   * @public
   * <p>For an S3 source, when this value is set to <code>true</code> or <code>y</code>,
   *          each leading double quotation mark has to be followed by an
   *          ending double quotation mark. This formatting complies with RFC
   *          4180. When this value is set to <code>false</code> or
   *          <code>n</code>, string literals are copied to the target as
   *          is. In this case, a delimiter (row or column) signals the end of
   *          the field. Thus, you can't use a delimiter as part of the
   *          string, because it signals the end of the value.</p>
   *          <p>For an S3 target, an optional parameter used to set behavior to comply with RFC
   *          4180 for data migrated to Amazon S3 using .csv file format only. When this
   *          value is set to <code>true</code> or <code>y</code> using Amazon
   *          S3 as a target, if the data has quotation marks or newline
   *          characters in it, DMS encloses the entire column with an
   *          additional pair of double quotation marks ("). Every quotation
   *          mark within the data is repeated twice.</p>
   *          <p>The default value is <code>true</code>. Valid values include <code>true</code>, <code>false</code>,
   *          <code>y</code>, and <code>n</code>.</p>
   */
  Rfc4180?: boolean;

  /**
   * @public
   * <p>When creating an S3 target endpoint, set <code>DatePartitionTimezone</code> to convert
   *          the current UTC time into a specified time zone. The conversion occurs when a date
   *          partition folder is created and a CDC filename is generated. The time zone format is Area/Location.
   *          Use this parameter when <code>DatePartitionedEnabled</code> is set to <code>true</code>, as shown in the
   *          following example.</p>
   *          <p>
   *             <code>s3-settings='\{"DatePartitionEnabled": true, "DatePartitionSequence": "YYYYMMDDHH",
   *          "DatePartitionDelimiter": "SLASH",
   *          "DatePartitionTimezone":"<i>Asia/Seoul</i>", "BucketName":
   *          "dms-nattarat-test"\}'</code>
   *          </p>
   */
  DatePartitionTimezone?: string;

  /**
   * @public
   * <p>Use the S3 target endpoint setting <code>AddTrailingPaddingCharacter</code> to add
   *          padding on string data. The default value is <code>false</code>.</p>
   */
  AddTrailingPaddingCharacter?: boolean;

  /**
   * @public
   * <p>To specify a bucket owner and prevent sniping, you can use the
   *          <code>ExpectedBucketOwner</code> endpoint setting. </p>
   *          <p>Example: <code>--s3-settings='\{"ExpectedBucketOwner": "<i>AWS_Account_ID</i>"\}'</code>
   *          </p>
   *          <p>When you make a request to test a connection or perform a migration, S3 checks the account
   *          ID of the bucket owner against the specified parameter.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * @public
   * <p>When true, allows Glue to catalog your S3 bucket. Creating an Glue catalog
   *          lets you use Athena to query your data.</p>
   */
  GlueCatalogGeneration?: boolean;
}

/**
 * @public
 * <p>Provides information that defines a SAP ASE endpoint.</p>
 */
export interface SybaseSettings {
  /**
   * @public
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>Endpoint TCP port. The default is 5000.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The full Amazon Resource Name (ARN) of the IAM role that specifies DMS as the
   *          trusted entity and grants the required permissions to access the value in
   *          <code>SecretsManagerSecret</code>. The role must allow the <code>iam:PassRole</code> action.
   *          <code>SecretsManagerSecret</code> has the value of the Amazon Web Services Secrets Manager
   *           secret that allows access to the SAP ASE endpoint.</p>
   *          <note>
   *             <p>You can specify one of two sets of values for these permissions. You can specify the
   *             values for this setting and <code>SecretsManagerSecretId</code>. Or you can specify
   *             clear-text values for <code>UserName</code>, <code>Password</code>,
   *                <code>ServerName</code>, and <code>Port</code>. You can't specify both. For more
   *             information on creating this <code>SecretsManagerSecret</code> and the
   *                <code>SecretsManagerAccessRoleArn</code> and <code>SecretsManagerSecretId</code>
   *             required to access it, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager">Using secrets to access Database Migration Service
   *                resources</a> in the <i>Database Migration Service User
   *                Guide</i>.</p>
   *          </note>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The full ARN, partial ARN, or friendly name of the <code>SecretsManagerSecret</code> that contains the SAP SAE endpoint connection details.</p>
   */
  SecretsManagerSecretId?: string;
}

/**
 * @public
 * <p>Provides information that defines an Amazon Timestream endpoint.</p>
 */
export interface TimestreamSettings {
  /**
   * @public
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>Set this attribute to specify the length of time to store all of the tables in memory
   *          that are migrated into Amazon Timestream from the source database. Time is measured in units
   *          of hours. When Timestream data comes in, it first resides in memory for the specified duration,
   *          which allows quick access to it.</p>
   */
  MemoryDuration: number | undefined;

  /**
   * @public
   * <p>Set this attribute to specify the default magnetic duration applied to the Amazon Timestream
   *          tables in days. This is the number of days that records remain in magnetic store
   *          before being discarded. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html">Storage</a> in the
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/">Amazon Timestream Developer Guide</a>.</p>
   */
  MagneticDuration: number | undefined;

  /**
   * @public
   * <p>Set this attribute to <code>true</code> to specify that DMS only
   *          applies inserts and updates, and not deletes. Amazon Timestream does not allow
   *          deleting records, so if this value is <code>false</code>, DMS nulls out
   *          the corresponding record in the Timestream database rather than deleting it.</p>
   */
  CdcInsertsAndUpdates?: boolean;

  /**
   * @public
   * <p>Set this attribute to <code>true</code> to enable memory store writes.
   *          When this value is <code>false</code>, DMS does not write records that are older
   *          in days than the value specified in <code>MagneticDuration</code>, because Amazon Timestream does not
   *          allow memory writes by default. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html">Storage</a> in the
   *          <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/">Amazon Timestream Developer Guide</a>.</p>
   */
  EnableMagneticStoreWrites?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface CreateEndpointMessage {
  /**
   * @public
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType: ReplicationEndpointTypeValue | undefined;

  /**
   * @public
   * <p>The type of engine for the endpoint. Valid values, depending on the
   *          <code>EndpointType</code> value, include <code>"mysql"</code>, <code>"oracle"</code>,
   *           <code>"postgres"</code>, <code>"mariadb"</code>, <code>"aurora"</code>,
   *           <code>"aurora-postgresql"</code>, <code>"opensearch"</code>, <code>"redshift"</code>, <code>"s3"</code>,
   *          <code>"db2"</code>, <code>"db2-zos"</code>, <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>,
   *          <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>, <code>"docdb"</code>,
   *          <code>"sqlserver"</code>, <code>"neptune"</code>, and <code>"babelfish"</code>.</p>
   */
  EngineName: string | undefined;

  /**
   * @public
   * <p>The user name to be used to log in to the endpoint database.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The password to be used to log in to the endpoint database.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The name of the server where the endpoint database resides.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port used by the endpoint database.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName.
   *       To migrate to a specific database, use this setting and <code>targetDbType</code>.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Additional attributes associated with the connection. Each attribute is specified as a
   *          name-value pair associated by an equal sign (=). Multiple attributes are separated by a
   *          semicolon (;) with no additional white space. For information on the attributes available
   *          for connecting your source or target endpoint, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html">Working with
   *             DMS Endpoints</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * @public
   * <p>An KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>One or more tags to be assigned to the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is <code>none</code>
   *          </p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for the service access role that you want to use to
   *           create the endpoint. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>The external table definition. </p>
   */
  ExternalTableDefinition?: string;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other
   *             available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping">Using Object Mapping to Migrate
   *                 Data to DynamoDB</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  S3Settings?: S3Settings;

  /**
   * @public
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p>
   *          <p>Possible settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ServiceAccessRoleArn</code> - The Amazon Resource Name (ARN) used by the service access IAM role.
   *                  The role must allow the <code>iam:PassRole</code> action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BucketName</code> - The name of the S3 bucket to use.</p>
   *             </li>
   *          </ul>
   *          <p>Shorthand syntax for these settings is as follows:
   *             <code>ServiceAccessRoleArn=string,BucketName=string</code>
   *          </p>
   *          <p>JSON syntax for these settings is as follows: <code>\{ "ServiceAccessRoleArn":
   *             "string", "BucketName": "string", \} </code>
   *          </p>
   */
  DmsTransferSettings?: DmsTransferSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration">Endpoint configuration settings
   *             when using MongoDB as a source for Database Migration Service</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For
   *          more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using object mapping to
   *             migrate data to a Kinesis data stream</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Apache Kafka endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping">Using object mapping
   *             to migrate data to a Kafka topic</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  KafkaSettings?: KafkaSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target OpenSearch endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using OpenSearch as a Target for DMS</a> in
   *           the <i>Database Migration Service User Guide</i>.</p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon Neptune endpoint.
   *          For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target</a>
   *             in the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  NeptuneSettings?: NeptuneSettings;

  /**
   * @public
   * <p>Provides information that defines an Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target PostgreSQL endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection
   *             attributes when using PostgreSQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib">
   *                Extra connection attributes when using PostgreSQL as a target for DMS</a> in the
   *           <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  PostgreSQLSettings?: PostgreSQLSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target MySQL endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib">Extra connection attributes
   *             when using MySQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib">Extra connection attributes when using a MySQL-compatible database as a target for DMS</a> in
   *           the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  MySQLSettings?: MySQLSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target Oracle endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib">Extra connection attributes
   *             when using Oracle as a source for DMS</a> and
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib">
   *             Extra connection attributes when using Oracle as a target for DMS</a>
   *           in the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  OracleSettings?: OracleSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target SAP ASE endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib">Extra connection attributes
   *                 when using SAP ASE as a target for DMS</a> in the <i>Database Migration Service
   *                     User Guide.</i>
   *          </p>
   */
  SybaseSettings?: SybaseSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target Microsoft SQL Server endpoint. For
   *          information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib">Extra connection
   *             attributes when using SQL Server as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib">
   *             Extra connection attributes when using SQL Server as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib">Extra connection attributes
   *             when using Db2 LUW as a source for DMS</a> in the <i>Database Migration Service
   *                 User Guide.</i>
   *          </p>
   */
  IBMDb2Settings?: IBMDb2Settings;

  /**
   * @public
   * <p>A friendly name for the resource identifier at the end of the <code>EndpointArn</code>
   *          response parameter that is returned in the created <code>Endpoint</code> object. The value
   *          for this parameter can have up to 31 characters. It can contain only ASCII letters, digits,
   *          and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens,
   *          and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this
   *          value might result in the <code>EndpointArn</code> value
   *             <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't
   *          specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier
   *          value for the end of <code>EndpointArn</code>.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
   * <p>Provides information that defines a DocumentDB endpoint.</p>
   */
  DocDbSettings?: DocDbSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Redis endpoint.</p>
   */
  RedisSettings?: RedisSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
   */
  GcpMySQLSettings?: GcpMySQLSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon Timestream endpoint.</p>
   */
  TimestreamSettings?: TimestreamSettings;
}

/**
 * @public
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
 *                   <code>ModifyEndpoint</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Endpoint {
  /**
   * @public
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * @public
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue;

  /**
   * @public
   * <p>The database engine name. Valid values, depending on the EndpointType, include
   *          <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *          <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>,
   *          <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>,
   *          <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>,
   *          <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>,
   *          <code>"neptune"</code>, and <code>"babelfish"</code>.</p>
   */
  EngineName?: string;

  /**
   * @public
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora", this value would be "Amazon Aurora MySQL".</p>
   */
  EngineDisplayName?: string;

  /**
   * @public
   * <p>The user name used to connect to the endpoint.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The name of the server at the endpoint.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port value used to access the endpoint.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The name of the database at the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Additional connection attributes used to connect to the endpoint.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * @public
   * <p>The status of the endpoint.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>An KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) used for SSL connection to the endpoint.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The SSL mode used to connect to the endpoint. The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) used by the service to access the IAM role.
   *          The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * @public
   * <p> Value returned by a call to CreateEndpoint that can be used for cross-account
   *          validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a
   *          cross-account. </p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>The settings for the DynamoDB target endpoint. For more information, see the
   *             <code>DynamoDBSettings</code> structure.</p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * @public
   * <p>The settings for the S3 target endpoint. For more information, see the
   *             <code>S3Settings</code> structure.</p>
   */
  S3Settings?: S3Settings;

  /**
   * @public
   * <p>The settings for the DMS Transfer type source. For more information, see the DmsTransferSettings structure.  </p>
   */
  DmsTransferSettings?: DmsTransferSettings;

  /**
   * @public
   * <p>The settings for the MongoDB source endpoint. For more information, see the
   *             <code>MongoDbSettings</code> structure.</p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * @public
   * <p>The settings for the Amazon Kinesis target endpoint. For more information, see the
   *             <code>KinesisSettings</code> structure.</p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * @public
   * <p>The settings for the Apache Kafka target endpoint. For more information, see the
   *          <code>KafkaSettings</code> structure.</p>
   */
  KafkaSettings?: KafkaSettings;

  /**
   * @public
   * <p>The settings for the OpenSearch source endpoint. For more information, see the
   *             <code>ElasticsearchSettings</code> structure.</p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * @public
   * <p>The settings for the Amazon Neptune target endpoint. For more information, see the
   *          <code>NeptuneSettings</code> structure.</p>
   */
  NeptuneSettings?: NeptuneSettings;

  /**
   * @public
   * <p>Settings for the Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * @public
   * <p>The settings for the PostgreSQL source and target endpoint. For more information, see
   *          the <code>PostgreSQLSettings</code> structure.</p>
   */
  PostgreSQLSettings?: PostgreSQLSettings;

  /**
   * @public
   * <p>The settings for the MySQL source and target endpoint. For more information, see the
   *             <code>MySQLSettings</code> structure.</p>
   */
  MySQLSettings?: MySQLSettings;

  /**
   * @public
   * <p>The settings for the Oracle source and target endpoint. For more information, see the
   *             <code>OracleSettings</code> structure.</p>
   */
  OracleSettings?: OracleSettings;

  /**
   * @public
   * <p>The settings for the SAP ASE source and target endpoint. For more information, see the
   *             <code>SybaseSettings</code> structure.</p>
   */
  SybaseSettings?: SybaseSettings;

  /**
   * @public
   * <p>The settings for the Microsoft SQL Server source and target endpoint. For more
   *          information, see the <code>MicrosoftSQLServerSettings</code> structure.</p>
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;

  /**
   * @public
   * <p>The settings for the IBM Db2 LUW source endpoint. For more information, see the
   *             <code>IBMDb2Settings</code> structure.
   *       </p>
   */
  IBMDb2Settings?: IBMDb2Settings;

  /**
   * @public
   * <p>Provides information that defines a DocumentDB endpoint.</p>
   */
  DocDbSettings?: DocDbSettings;

  /**
   * @public
   * <p>The settings for the Redis target endpoint. For more information, see the
   *          <code>RedisSettings</code> structure.</p>
   */
  RedisSettings?: RedisSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
   */
  GcpMySQLSettings?: GcpMySQLSettings;

  /**
   * @public
   * <p>The settings for the Amazon Timestream target endpoint. For more information, see the
   *          <code>TimestreamSettings</code> structure.</p>
   */
  TimestreamSettings?: TimestreamSettings;
}

/**
 * @public
 * <p></p>
 */
export interface CreateEndpointResponse {
  /**
   * @public
   * <p>The endpoint that was created.</p>
   */
  Endpoint?: Endpoint;
}

/**
 * @public
 * <p>DMS cannot access the KMS key.</p>
 */
export class KMSKeyNotAccessibleFault extends __BaseException {
  readonly name: "KMSKeyNotAccessibleFault" = "KMSKeyNotAccessibleFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSKeyNotAccessibleFault, __BaseException>) {
    super({
      name: "KMSKeyNotAccessibleFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSKeyNotAccessibleFault.prototype);
  }
}

/**
 * @public
 * <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 */
export class S3AccessDeniedFault extends __BaseException {
  readonly name: "S3AccessDeniedFault" = "S3AccessDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3AccessDeniedFault, __BaseException>) {
    super({
      name: "S3AccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3AccessDeniedFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the DMS event notification subscription. This name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it. </p>
   */
  SnsTopicArn: string | undefined;

  /**
   * @public
   * <p> The type of DMS resource that generates the events. For example, if you want to be
   *          notified of events generated by a replication instance, you set this parameter to
   *             <code>replication-instance</code>. If this value isn't specified, all events are
   *          returned. </p>
   *          <p>Valid values: <code>replication-instance</code> | <code>replication-task</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>A list of event categories for a source type that you want to subscribe to. For more
   *            information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
   *                Notifications</a> in the <i>Database Migration Service User
   *                    Guide.</i>
   *          </p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p>A list of identifiers for which DMS provides notification events.</p>
   *          <p>If you don't specify a value, notifications are provided for all sources.</p>
   *          <p>If you specify multiple values, they must be of the same type. For example, if you
   *             specify a database instance ID, then all of the other values must be database instance
   *             IDs.</p>
   */
  SourceIds?: string[];

  /**
   * @public
   * <p> A Boolean value; set to <code>true</code> to activate the subscription, or set to
   *             <code>false</code> to create the subscription but not activate it. </p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>One or more tags to be assigned to the event subscription.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Describes an event notification subscription created by the <code>CreateEventSubscription</code>
 *          operation.</p>
 */
export interface EventSubscription {
  /**
   * @public
   * <p>The Amazon Web Services customer account associated with the DMS event notification
   *          subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * @public
   * <p>The DMS event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * @public
   * <p>The topic ARN of the DMS event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The status of the DMS event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission |
   *          topic-not-exist</p>
   *          <p>The status "no-permission" indicates that DMS no longer has permission to post to
   *          the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the
   *          subscription was created.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The time the DMS event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * @public
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>A list of source Ids for the event subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * @public
   * <p>A lists of event categories.</p>
   */
  EventCategoriesList?: string[];

  /**
   * @public
   * <p>Boolean value that indicates if the event subscription is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface CreateEventSubscriptionResponse {
  /**
   * @public
   * <p>The event subscription that was created.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
 */
export class KMSAccessDeniedFault extends __BaseException {
  readonly name: "KMSAccessDeniedFault" = "KMSAccessDeniedFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSAccessDeniedFault, __BaseException>) {
    super({
      name: "KMSAccessDeniedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSAccessDeniedFault.prototype);
  }
}

/**
 * @public
 * <p>The specified KMS key isn't enabled.</p>
 */
export class KMSDisabledFault extends __BaseException {
  readonly name: "KMSDisabledFault" = "KMSDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSDisabledFault, __BaseException>) {
    super({
      name: "KMSDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSDisabledFault.prototype);
  }
}

/**
 * @public
 * <p>The state of the specified KMS resource isn't valid for this request.</p>
 */
export class KMSInvalidStateFault extends __BaseException {
  readonly name: "KMSInvalidStateFault" = "KMSInvalidStateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateFault, __BaseException>) {
    super({
      name: "KMSInvalidStateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateFault.prototype);
  }
}

/**
 * @public
 * <p>The specified KMS entity or resource can't be found.</p>
 */
export class KMSNotFoundFault extends __BaseException {
  readonly name: "KMSNotFoundFault" = "KMSNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSNotFoundFault, __BaseException>) {
    super({
      name: "KMSNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSNotFoundFault.prototype);
  }
}

/**
 * @public
 * <p>This request triggered KMS request throttling.</p>
 */
export class KMSThrottlingFault extends __BaseException {
  readonly name: "KMSThrottlingFault" = "KMSThrottlingFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSThrottlingFault, __BaseException>) {
    super({
      name: "KMSThrottlingFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSThrottlingFault.prototype);
  }
}

/**
 * @public
 * <p>The SNS topic is invalid.</p>
 */
export class SNSInvalidTopicFault extends __BaseException {
  readonly name: "SNSInvalidTopicFault" = "SNSInvalidTopicFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSInvalidTopicFault, __BaseException>) {
    super({
      name: "SNSInvalidTopicFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSInvalidTopicFault.prototype);
  }
}

/**
 * @public
 * <p>You are not authorized for the SNS subscription.</p>
 */
export class SNSNoAuthorizationFault extends __BaseException {
  readonly name: "SNSNoAuthorizationFault" = "SNSNoAuthorizationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SNSNoAuthorizationFault, __BaseException>) {
    super({
      name: "SNSNoAuthorizationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SNSNoAuthorizationFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateFleetAdvisorCollectorRequest {
  /**
   * @public
   * <p>The name of your Fleet Advisor collector (for example, <code>sample-collector</code>).</p>
   */
  CollectorName: string | undefined;

  /**
   * @public
   * <p>A summary description of your Fleet Advisor collector.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The IAM role that grants permissions to access the specified Amazon S3 bucket.</p>
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.</p>
   */
  S3BucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateFleetAdvisorCollectorResponse {
  /**
   * @public
   * <p>The unique ID of the new Fleet Advisor collector, for example:
   *                 <code>22fda70c-40d5-4acf-b233-a495bd8eb7f5</code>
   *          </p>
   */
  CollectorReferencedId?: string;

  /**
   * @public
   * <p>The name of the new Fleet Advisor collector.</p>
   */
  CollectorName?: string;

  /**
   * @public
   * <p>A summary description of the Fleet Advisor collector.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The IAM role that grants permissions to access the specified Amazon S3 bucket.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>The Amazon S3 bucket that the collector uses to store inventory metadata.</p>
   */
  S3BucketName?: string;
}

/**
 * @public
 * <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 */
export class S3ResourceNotFoundFault extends __BaseException {
  readonly name: "S3ResourceNotFoundFault" = "S3ResourceNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3ResourceNotFoundFault, __BaseException>) {
    super({
      name: "S3ResourceNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3ResourceNotFoundFault.prototype);
  }
}

/**
 * @public
 */
export interface CreateInstanceProfileMessage {
  /**
   * @public
   * <p>The Availability Zone where the instance profile will be created. The default
   *          value is a random, system-chosen Availability Zone in the Amazon Web Services Region where your
   *          data provider is created, for examplem <code>us-east-1d</code>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt
   *          the connection parameters for the instance profile.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyArn</code> parameter, then
   *          DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>Specifies the accessibility options for the instance profile. A value of
   *          <code>true</code> represents an instance profile with a public IP address. A value of
   *          <code>false</code> represents an instance profile with a private IP address. The default value
   *          is <code>true</code>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>One or more tags to be assigned to the instance profile.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Specifies the network type for the instance profile. A value of <code>IPV4</code>
   *          represents an instance profile with IPv4 network type and only supports IPv4 addressing.
   *          A value of <code>IPV6</code> represents an instance profile with IPv6 network type
   *          and only supports IPv6 addressing. A value of <code>DUAL</code> represents an instance
   *          profile with dual network type that supports IPv4 and IPv6 addressing.</p>
   */
  NetworkType?: string;

  /**
   * @public
   * <p>A user-friendly name for the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * @public
   * <p>A user-friendly description of the instance profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A subnet group to associate with the instance profile.</p>
   */
  SubnetGroupIdentifier?: string;

  /**
   * @public
   * <p>Specifies the VPC security group names to be used with the instance profile.
   *          The VPC security group must work with the VPC containing the instance profile.</p>
   */
  VpcSecurityGroups?: string[];
}

/**
 * @public
 * <p>Provides information that defines an instance profile.</p>
 */
export interface InstanceProfile {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the instance profile.</p>
   */
  InstanceProfileArn?: string;

  /**
   * @public
   * <p>The Availability Zone where the instance profile runs.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt
   *          the connection parameters for the instance profile.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyArn</code> parameter, then
   *          DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account
   *          has a different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>Specifies the accessibility options for the instance profile. A value of
   *          <code>true</code> represents an instance profile with a public IP address. A value of
   *          <code>false</code> represents an instance profile with a private IP address. The default value
   *          is <code>true</code>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>Specifies the network type for the instance profile. A value of <code>IPV4</code>
   *          represents an instance profile with IPv4 network type and only supports IPv4 addressing.
   *          A value of <code>IPV6</code> represents an instance profile with IPv6 network type
   *          and only supports IPv6 addressing. A value of <code>DUAL</code> represents an instance
   *          profile with dual network type that supports IPv4 and IPv6 addressing.</p>
   */
  NetworkType?: string;

  /**
   * @public
   * <p>The user-friendly name for the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * @public
   * <p>A description of the instance profile. Descriptions can have up to 31 characters.
   *          A description can contain only ASCII letters, digits, and hyphens ('-'). Also, it can't
   *          end with a hyphen or contain two consecutive hyphens, and can only begin with a letter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The time the instance profile was created.</p>
   */
  InstanceProfileCreationTime?: Date;

  /**
   * @public
   * <p>The identifier of the subnet group that is associated with the instance profile.</p>
   */
  SubnetGroupIdentifier?: string;

  /**
   * @public
   * <p>The VPC security groups that are used with the instance profile.
   *          The VPC security group must work with the VPC containing the instance profile.</p>
   */
  VpcSecurityGroups?: string[];
}

/**
 * @public
 */
export interface CreateInstanceProfileResponse {
  /**
   * @public
   * <p>The instance profile that was created.</p>
   */
  InstanceProfile?: InstanceProfile;
}

/**
 * @public
 * <p>Provides information that defines a schema conversion application.</p>
 */
export interface SCApplicationAttributes {
  /**
   * @public
   * <p>The path for the Amazon S3 bucket that the application uses for exporting assessment reports.</p>
   */
  S3BucketPath?: string;

  /**
   * @public
   * <p>The ARN for the role the application uses to access its Amazon S3 bucket.</p>
   */
  S3BucketRoleArn?: string;
}

/**
 * @public
 * <p>Information about a data provider.</p>
 */
export interface DataProviderDescriptorDefinition {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the data provider.</p>
   */
  DataProviderIdentifier: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>The ARN of the role used to access Amazon Web Services Secrets Manager.</p>
   */
  SecretsManagerAccessRoleArn?: string;
}

/**
 * @public
 */
export interface CreateMigrationProjectMessage {
  /**
   * @public
   * <p>A user-friendly name for the migration project.</p>
   */
  MigrationProjectName?: string;

  /**
   * @public
   * <p>Information about the source data provider, including the name, ARN, and Secrets Manager parameters.</p>
   */
  SourceDataProviderDescriptors: DataProviderDescriptorDefinition[] | undefined;

  /**
   * @public
   * <p>Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   */
  TargetDataProviderDescriptors: DataProviderDescriptorDefinition[] | undefined;

  /**
   * @public
   * <p>The identifier of the associated instance profile. Identifiers must begin with a letter
   *          and must contain only ASCII letters, digits, and hyphens. They can't end with
   *          a hyphen, or contain two consecutive hyphens.</p>
   */
  InstanceProfileIdentifier: string | undefined;

  /**
   * @public
   * <p>The settings in JSON format for migration rules. Migration rules make it possible for you to change
   *          the object names according to the rules that you specify. For example, you can change an object name
   *          to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.</p>
   */
  TransformationRules?: string;

  /**
   * @public
   * <p>A user-friendly description of the migration project.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>One or more tags to be assigned to the migration project.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.</p>
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}

/**
 * @public
 * <p>Information about a data provider.</p>
 */
export interface DataProviderDescriptor {
  /**
   * @public
   * <p>The identifier of the Amazon Web Services Secrets Manager Secret used to store access credentials for the data provider.</p>
   */
  SecretsManagerSecretId?: string;

  /**
   * @public
   * <p>The ARN of the role used to access Amazon Web Services Secrets Manager.</p>
   */
  SecretsManagerAccessRoleArn?: string;

  /**
   * @public
   * <p>The user-friendly name of the data provider.</p>
   */
  DataProviderName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data provider.</p>
   */
  DataProviderArn?: string;
}

/**
 * @public
 * <p>Provides information that defines a migration project.</p>
 */
export interface MigrationProject {
  /**
   * @public
   * <p>The name of the migration project.</p>
   */
  MigrationProjectName?: string;

  /**
   * @public
   * <p>The ARN string that uniquely identifies the migration project.</p>
   */
  MigrationProjectArn?: string;

  /**
   * @public
   * <p>The time when the migration project was created.</p>
   */
  MigrationProjectCreationTime?: Date;

  /**
   * @public
   * <p>Information about the source data provider, including the name or ARN, and Secrets Manager parameters.</p>
   */
  SourceDataProviderDescriptors?: DataProviderDescriptor[];

  /**
   * @public
   * <p>Information about the target data provider, including the name or ARN, and Secrets Manager parameters.</p>
   */
  TargetDataProviderDescriptors?: DataProviderDescriptor[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the instance profile for your migration project.</p>
   */
  InstanceProfileArn?: string;

  /**
   * @public
   * <p>The name of the associated instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * @public
   * <p>The settings in JSON format for migration rules. Migration rules make it possible for you to change
   *          the object names according to the rules that you specify. For example, you can change an object name
   *          to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.</p>
   */
  TransformationRules?: string;

  /**
   * @public
   * <p>A user-friendly description of the migration project.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.</p>
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}

/**
 * @public
 */
export interface CreateMigrationProjectResponse {
  /**
   * @public
   * <p>The migration project that was created.</p>
   */
  MigrationProject?: MigrationProject;
}

/**
 * @public
 * <p>Configuration parameters for provisioning an DMS Serverless replication.</p>
 */
export interface ComputeConfig {
  /**
   * @public
   * <p>The Availability Zone where the DMS Serverless replication using this configuration will run.
   *          The default value is a random, system-chosen Availability Zone in the configuration's Amazon Web Services Region,
   *          for example, <code>"us-west-2"</code>. You can't set this parameter if the <code>MultiAZ</code>
   *          parameter is set to <code>true</code>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>A list of custom DNS name servers supported for the DMS Serverless replication
   *          to access your source or target database. This list overrides the default name servers
   *          supported by the DMS Serverless replication. You can specify a comma-separated list of
   *          internet addresses for up to four DNS name servers.
   *          For example: <code>"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"</code>
   *          </p>
   */
  DnsNameServers?: string;

  /**
   * @public
   * <p>An Key Management Service (KMS) key Amazon Resource Name (ARN) that is used to encrypt the data during
   *          DMS Serverless replication.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, DMS uses your default
   *          encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies the maximum value of the DMS capacity units (DCUs) for which a given DMS Serverless
   *          replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the minimum value allowed.
   *          The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the maximum value
   *          that you can specify for DMS Serverless is 384. The <code>MaxCapacityUnits</code> parameter is the only
   *          DCU parameter you are required to specify.</p>
   */
  MaxCapacityUnits?: number;

  /**
   * @public
   * <p>Specifies the minimum value of the DMS capacity units (DCUs) for which a given DMS
   *          Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 1 DCU as the minimum value
   *          allowed. The list of valid DCU values includes 1, 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. So, the minimum DCU
   *          value that you can specify for DMS Serverless is 1. You don't have to specify a value for the
   *          <code>MinCapacityUnits</code> parameter. If you don't set this value, DMS scans the current activity
   *          of available source tables to identify an optimum setting for this parameter. If there is no current
   *          source activity or DMS can't otherwise identify a more appropriate value, it sets this parameter to
   *          the minimum DCU value allowed, 1.</p>
   */
  MinCapacityUnits?: number;

  /**
   * @public
   * <p>Specifies whether the DMS Serverless replication is a Multi-AZ deployment. You can't set the
   *          <code>AvailabilityZone</code> parameter if the <code>MultiAZ</code> parameter is set to
   *          <code>true</code>.</p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur for the DMS Serverless
   *          replication, in Universal Coordinated Time (UTC). The format is <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region.
   *          This maintenance occurs on a random day of the week. Valid values for days of the week include
   *          <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thu</code>, <code>Fri</code>, <code>Sat</code>,
   *          and <code>Sun</code>.</p>
   *          <p>Constraints include a minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>Specifies a subnet group identifier to associate with the DMS Serverless replication.</p>
   */
  ReplicationSubnetGroupId?: string;

  /**
   * @public
   * <p>Specifies the virtual private cloud (VPC) security group to use with the DMS Serverless
   *          replication. The VPC security group must work with the VPC containing the replication.</p>
   */
  VpcSecurityGroupIds?: string[];
}

/**
 * @public
 * @enum
 */
export const MigrationTypeValue = {
  CDC: "cdc",
  FULL_LOAD: "full-load",
  FULL_LOAD_AND_CDC: "full-load-and-cdc",
} as const;

/**
 * @public
 */
export type MigrationTypeValue = (typeof MigrationTypeValue)[keyof typeof MigrationTypeValue];

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationConfigMessage {
  /**
   * @public
   * <p>A unique identifier that you want to use to create a <code>ReplicationConfigArn</code> that is
   *          returned as part of the output from this action. You can then pass this output <code>ReplicationConfigArn</code>
   *          as the value of the <code>ReplicationConfigArn</code> option for other actions to identify both
   *          DMS Serverless replications and replication configurations that you want those actions to operate on.
   *          For some actions, you can also use either this unique identifier or a corresponding ARN in action filters to
   *          identify the specific replication and replication configuration to operate on.</p>
   */
  ReplicationConfigIdentifier: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source endpoint for
   *          this DMS Serverless replication configuration.</p>
   */
  SourceEndpointArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target endpoint for
   *          this DMS serverless replication configuration.</p>
   */
  TargetEndpointArn: string | undefined;

  /**
   * @public
   * <p>Configuration parameters for provisioning an DMS Serverless replication.</p>
   */
  ComputeConfig: ComputeConfig | undefined;

  /**
   * @public
   * <p>The type of DMS Serverless replication to provision
   *          using this replication configuration.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"full-load"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"cdc"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"full-load-and-cdc"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ReplicationType: MigrationTypeValue | undefined;

  /**
   * @public
   * <p>JSON table mappings for DMS Serverless replications that are provisioned
   *          using this replication configuration. For more information, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.SelectionTransformation.html">
   *             Specifying table selection and transformations rules using JSON</a>.</p>
   */
  TableMappings: string | undefined;

  /**
   * @public
   * <p>Optional JSON settings for DMS Serverless replications that are
   *          provisioned using this replication configuration. For example, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html">
   *             Change processing tuning settings</a>.</p>
   */
  ReplicationSettings?: string;

  /**
   * @public
   * <p>Optional JSON settings for specifying supplemental data. For more information, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">
   *             Specifying supplemental data for task settings</a>.</p>
   */
  SupplementalSettings?: string;

  /**
   * @public
   * <p>Optional unique value or name that you set for a given resource
   *          that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess">
   *             Fine-grained access control using resource names and tags</a>.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
   * <p>One or more optional tags associated with resources used by the DMS Serverless replication.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tagging.html">
   *             Tagging resources in Database Migration Service</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>This object provides configuration information about a serverless replication.</p>
 */
export interface ReplicationConfig {
  /**
   * @public
   * <p>The identifier for the <code>ReplicationConfig</code> associated with the replication.</p>
   */
  ReplicationConfigIdentifier?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of
   *          this DMS Serverless replication configuration.</p>
   */
  ReplicationConfigArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source endpoint for
   *          this DMS serverless replication configuration.</p>
   */
  SourceEndpointArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target endpoint for
   *          this DMS serverless replication configuration.</p>
   */
  TargetEndpointArn?: string;

  /**
   * @public
   * <p>The type of the replication.</p>
   */
  ReplicationType?: MigrationTypeValue;

  /**
   * @public
   * <p>Configuration parameters for provisioning an DMS serverless replication.</p>
   */
  ComputeConfig?: ComputeConfig;

  /**
   * @public
   * <p>Configuration parameters for an DMS serverless replication.</p>
   */
  ReplicationSettings?: string;

  /**
   * @public
   * <p>Additional parameters for an DMS serverless replication.</p>
   */
  SupplementalSettings?: string;

  /**
   * @public
   * <p>Table mappings specified in the replication.</p>
   */
  TableMappings?: string;

  /**
   * @public
   * <p>The time the serverless replication config was created.</p>
   */
  ReplicationConfigCreateTime?: Date;

  /**
   * @public
   * <p>The time the serverless replication config was updated.</p>
   */
  ReplicationConfigUpdateTime?: Date;
}

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationConfigResponse {
  /**
   * @public
   * <p>Configuration parameters returned from the DMS Serverless replication after it is created.</p>
   */
  ReplicationConfig?: ReplicationConfig;
}

/**
 * @public
 * <p>The subnet provided isn't valid.</p>
 */
export class InvalidSubnet extends __BaseException {
  readonly name: "InvalidSubnet" = "InvalidSubnet";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnet, __BaseException>) {
    super({
      name: "InvalidSubnet",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnet.prototype);
  }
}

/**
 * @public
 * <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 */
export class ReplicationSubnetGroupDoesNotCoverEnoughAZs extends __BaseException {
  readonly name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs" = "ReplicationSubnetGroupDoesNotCoverEnoughAZs";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationSubnetGroupDoesNotCoverEnoughAZs, __BaseException>) {
    super({
      name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationSubnetGroupDoesNotCoverEnoughAZs.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationInstanceMessage {
  /**
   * @public
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
   * @public
   * <p>The amount of storage (in gigabytes) to be initially allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html ">
   *             Choosing the right DMS replication instance</a>; and,
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.SizingReplicationInstance.html">Selecting the best size for a replication instance</a>.
   *       </p>
   */
  ReplicationInstanceClass: string | undefined;

  /**
   * @public
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The Availability Zone where the replication instance will be created. The default
   *          value is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, for
   *          example: <code>us-east-1d</code>.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>A subnet group to associate with the replication instance.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * @public
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>Default: A 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region,
   *           occurring on a random day of the week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The engine version number of the replication instance.</p>
   *          <p>If an engine version number is not specified when a replication
   *          instance is created, the default is the latest engine version available.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the
   *          replication instance during the maintenance window. This parameter defaults to
   *             <code>true</code>.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>One or more tags to be assigned to the replication instance.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>An KMS key identifier that is used to encrypt the data on the replication
   *            instance.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>A list of custom DNS name servers supported for the replication instance to access your
   *          on-premise source or target database. This list overrides the default name servers
   *          supported by the replication instance. You can specify a comma-separated list of internet
   *          addresses for up to four on-premise DNS name servers. For example:
   *             <code>"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"</code>
   *          </p>
   */
  DnsNameServers?: string;

  /**
   * @public
   * <p>A friendly name for the resource identifier at the end of the <code>EndpointArn</code>
   *          response parameter that is returned in the created <code>Endpoint</code> object. The value
   *          for this parameter can have up to 31 characters. It can contain only ASCII letters, digits,
   *          and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens,
   *          and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this
   *          value might result in the <code>EndpointArn</code> value
   *          <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't
   *          specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier
   *          value for the end of <code>EndpointArn</code>.</p>
   */
  ResourceIdentifier?: string;

  /**
   * @public
   * <p>The type of IP address protocol used by a replication instance,
   *          such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
   *          IPv6 only is not yet supported.</p>
   */
  NetworkType?: string;
}

/**
 * @public
 * <p>Provides information about the values of pending modifications to a replication
 *          instance. This data type is an object of the
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html">
 *                <code>ReplicationInstance</code>
 *             </a> user-defined
 *          data type. </p>
 */
export interface ReplicationPendingModifiedValues {
  /**
   * @public
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * @public
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The type of IP address protocol used by a replication instance,
   *          such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
   *          IPv6 only is not yet supported.</p>
   */
  NetworkType?: string;
}

/**
 * @public
 * <p>The name of an Availability Zone for use during database migration.
 *             <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html">
 *                <code>CreateReplicationInstance</code>
 *             </a> operation, and it’s value relates to
 *          the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the
 *          us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d.</p>
 */
export interface AvailabilityZone {
  /**
   * @public
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation,
 *          this object identifies a subnet by its given Availability Zone, subnet identifier, and
 *          status.</p>
 */
export interface Subnet {
  /**
   * @public
   * <p>The subnet identifier.</p>
   */
  SubnetIdentifier?: string;

  /**
   * @public
   * <p>The Availability Zone of the subnet.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * @public
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
}

/**
 * @public
 * <p>Describes a subnet group in response to a request by the
 *             <code>DescribeReplicationSubnetGroups</code> operation.</p>
 */
export interface ReplicationSubnetGroup {
  /**
   * @public
   * <p>The identifier of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * @public
   * <p>A description for the replication subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * @public
   * <p>The subnets that are in the subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * @public
   * <p>The IP addressing protocol supported by the subnet group. This is used by a
   *       replication instance with values such as IPv4 only or Dual-stack that supports
   *       both IPv4 and IPv6 addressing. IPv6 only is not yet supported.</p>
   */
  SupportedNetworkTypes?: string[];
}

/**
 * @public
 * <p>Describes the status of a security group associated with the virtual private cloud (VPC)
 *          hosting your replication and DB instances.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * @public
   * <p>The VPC security group ID.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * @public
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

/**
 * @public
 * <p>Provides information that defines a replication instance.</p>
 */
export interface ReplicationInstance {
  /**
   * @public
   * <p>The replication instance identifier is a required parameter. This parameter is stored as
   *          a lowercase string.</p>
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
   * @public
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. It is a required parameter, although a default value is
   *          pre-selected in the DMS console.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * @public
   * <p>The status of the replication instance. The possible return values include:</p>
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
   * @public
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>The time the replication instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * @public
   * <p>The VPC security group for the instance.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @public
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The subnet group for the replication instance.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;

  /**
   * @public
   * <p>The maintenance window times for the replication instance. Any pending upgrades to the
   *          replication instance are performed during this time.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p>The pending modification values.</p>
   */
  PendingModifiedValues?: ReplicationPendingModifiedValues;

  /**
   * @public
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The engine version number of the replication instance.</p>
   *          <p>If an engine version number is not specified when a replication
   *          instance is created, the default is the latest engine version available.</p>
   *          <p>When modifying a major engine version of an instance, also set
   *          <code>AllowMajorVersionUpgrade</code> to <code>true</code>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Boolean value indicating if minor version upgrades will be automatically applied to the
   *          instance.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>An KMS key identifier that is used to encrypt the data on the replication
   *            instance.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The public IP address of the replication instance.</p>
   */
  ReplicationInstancePublicIpAddress?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>The private IP address of the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddress?: string;

  /**
   * @public
   * <p>One or more public IP addresses for the replication instance.</p>
   */
  ReplicationInstancePublicIpAddresses?: string[];

  /**
   * @public
   * <p>One or more private IP addresses for the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddresses?: string[];

  /**
   * @public
   * <p>One or more IPv6 addresses for the replication instance.</p>
   */
  ReplicationInstanceIpv6Addresses?: string[];

  /**
   * @public
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>The Availability Zone of the standby replication instance in a Multi-AZ
   *          deployment.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * @public
   * <p> The expiration date of the free replication instance that is part of the Free DMS
   *          program. </p>
   */
  FreeUntil?: Date;

  /**
   * @public
   * <p>The DNS name servers supported for the replication instance to access your on-premise source or target database.</p>
   */
  DnsNameServers?: string;

  /**
   * @public
   * <p>The type of IP address protocol used by a replication instance,
   *          such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
   *          IPv6 only is not yet supported.</p>
   */
  NetworkType?: string;
}

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationInstanceResponse {
  /**
   * @public
   * <p>The replication instance that was created.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

/**
 * @public
 * <p>There are not enough resources allocated to the database migration.</p>
 */
export class InsufficientResourceCapacityFault extends __BaseException {
  readonly name: "InsufficientResourceCapacityFault" = "InsufficientResourceCapacityFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientResourceCapacityFault, __BaseException>) {
    super({
      name: "InsufficientResourceCapacityFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientResourceCapacityFault.prototype);
  }
}

/**
 * @public
 * <p>The storage quota has been exceeded.</p>
 */
export class StorageQuotaExceededFault extends __BaseException {
  readonly name: "StorageQuotaExceededFault" = "StorageQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageQuotaExceededFault, __BaseException>) {
    super({
      name: "StorageQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageQuotaExceededFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationSubnetGroupMessage {
  /**
   * @public
   * <p>The name for the replication subnet group. This value is stored as a lowercase
   *          string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces,
   *          underscores, or hyphens. Must not be "default".</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>The description for the subnet group.</p>
   */
  ReplicationSubnetGroupDescription: string | undefined;

  /**
   * @public
   * <p>One or more subnet IDs to be assigned to the subnet group.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>One or more tags to be assigned to the subnet group.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationSubnetGroupResponse {
  /**
   * @public
   * <p>The replication subnet group that was created.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationTaskMessage {
  /**
   * @public
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
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.</p>
   */
  SourceEndpointArn: string | undefined;

  /**
   * @public
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.</p>
   */
  TargetEndpointArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   */
  MigrationType: MigrationTypeValue | undefined;

  /**
   * @public
   * <p>The table mappings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html">Using Table
   *             Mapping to Specify Task Settings</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  TableMappings: string | undefined;

  /**
   * @public
   * <p>Overall settings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html">Specifying Task
   *             Settings for Database Migration Service Tasks</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  ReplicationTaskSettings?: string;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
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
   *                for DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</p>
   */
  CdcStopPosition?: string;

  /**
   * @public
   * <p>One or more tags to be assigned to the replication task.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  TaskData?: string;

  /**
   * @public
   * <p>A friendly name for the resource identifier at the end of the <code>EndpointArn</code>
   *          response parameter that is returned in the created <code>Endpoint</code> object. The value
   *          for this parameter can have up to 31 characters. It can contain only ASCII letters, digits,
   *          and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens,
   *          and can only begin with a letter, such as <code>Example-App-ARN1</code>. For example, this
   *          value might result in the <code>EndpointArn</code> value
   *          <code>arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1</code>. If you don't
   *          specify a <code>ResourceIdentifier</code> value, DMS generates a default identifier
   *          value for the end of <code>EndpointArn</code>.</p>
   */
  ResourceIdentifier?: string;
}

/**
 * @public
 * <p>In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides
 *          a collection of statistics about a replication task.</p>
 */
export interface ReplicationTaskStats {
  /**
   * @public
   * <p>The percent complete for the full load migration task.</p>
   */
  FullLoadProgressPercent?: number;

  /**
   * @public
   * <p>The elapsed time of the task, in milliseconds.</p>
   */
  ElapsedTimeMillis?: number;

  /**
   * @public
   * <p>The number of tables loaded for this task.</p>
   */
  TablesLoaded?: number;

  /**
   * @public
   * <p>The number of tables currently loading for this task.</p>
   */
  TablesLoading?: number;

  /**
   * @public
   * <p>The number of tables queued for this task.</p>
   */
  TablesQueued?: number;

  /**
   * @public
   * <p>The number of errors that have occurred during this task.</p>
   */
  TablesErrored?: number;

  /**
   * @public
   * <p>The date the replication task was started either with a fresh start or a target reload.</p>
   */
  FreshStartDate?: Date;

  /**
   * @public
   * <p>The date the replication task was started either with a fresh start or a resume. For more information, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html#DMS-StartReplicationTask-request-StartReplicationTaskType">StartReplicationTaskType</a>.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The date the replication task was stopped.</p>
   */
  StopDate?: Date;

  /**
   * @public
   * <p>The date the replication task full load was started.</p>
   */
  FullLoadStartDate?: Date;

  /**
   * @public
   * <p>The date the replication task full load was completed.</p>
   */
  FullLoadFinishDate?: Date;
}

/**
 * @public
 * <p>Provides information that describes a replication task created by the
 *             <code>CreateReplicationTask</code> operation.</p>
 */
export interface ReplicationTask {
  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the endpoint.</p>
   */
  SourceEndpointArn?: string;

  /**
   * @public
   * <p>The ARN that uniquely identifies the endpoint.</p>
   */
  TargetEndpointArn?: string;

  /**
   * @public
   * <p>The ARN of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * @public
   * <p>The type of migration.</p>
   */
  MigrationType?: MigrationTypeValue;

  /**
   * @public
   * <p>Table mappings specified in the task.</p>
   */
  TableMappings?: string;

  /**
   * @public
   * <p>The settings for the replication task.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * @public
   * <p>The status of the replication task. This response parameter can return one of
   *          the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"moving"</code> – The task is being moved in response to running the
   *                   <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html">
   *                      <code>MoveReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"creating"</code> – The task is being created in response to running
   *                the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html">
   *                      <code>CreateReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code> – The task is being deleted in response to running
   *                the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html">
   *                      <code>DeleteReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code> – The task failed to successfully complete the database
   *                migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed-move"</code> – The task failed to move in response to running
   *                the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html">
   *                      <code>MoveReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"modifying"</code> – The task definition is being modified in response
   *                to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html">
   *                      <code>ModifyReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"ready"</code> – The task is in a <code>ready</code> state where it can
   *                respond to other task operations, such as <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> or <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html">
   *                      <code>DeleteReplicationTask</code>
   *                   </a>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"running"</code> – The task is performing a database migration in
   *                response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"starting"</code> – The task is preparing to perform a database
   *                migration in response to running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html">
   *                      <code>StartReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"stopped"</code> – The task has stopped in response to running the
   *                   <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html">
   *                      <code>StopReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"stopping"</code> – The task is preparing to stop in response to
   *                running the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html">
   *                      <code>StopReplicationTask</code>
   *                   </a> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"testing"</code> – The database migration specified for this task is
   *                being tested in response to running either the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html">
   *                      <code>StartReplicationTaskAssessmentRun</code>
   *                   </a> or the
   *                   <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html">
   *                      <code>StartReplicationTaskAssessment</code>
   *                   </a>
   *                operation.</p>
   *                <note>
   *                   <p>
   *                      <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html">
   *                         <code>StartReplicationTaskAssessmentRun</code>
   *                      </a> is
   *                   an improved premigration task assessment operation. The <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html">
   *                         <code>StartReplicationTaskAssessment</code>
   *                      </a>
   *                   operation assesses data type compatibility only between the source and target
   *                   database of a given migration task. In contrast, <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html">
   *                         <code>StartReplicationTaskAssessmentRun</code>
   *                      </a>
   *                   enables you to specify a variety of premigration task assessments in addition to
   *                   data type compatibility. These assessments include ones for the validity of primary key definitions and
   *                   likely issues with database migration performance, among others.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * @public
   * <p>The last error (failure) message generated for the replication task.</p>
   */
  LastFailureMessage?: string;

  /**
   * @public
   * <p>The reason the replication task was stopped. This response parameter can return one of
   *          the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason NORMAL"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECOVERABLE_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FATAL_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FULL_LOAD_ONLY_FINISHED"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_FULL_LOAD"</code> – Full load completed, with cached changes not applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_CACHED_EVENTS"</code>  – Full load completed, with cached changes applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_DDL_APPLY"</code> – User-defined stop task after DDL applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_MEMORY"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_DISK"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_SERVER_TIME"</code> – User-defined server time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_COMMIT_TIME"</code> –  User-defined commit time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECONFIGURATION_RESTART"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECYCLE_TASK"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StopReason?: string;

  /**
   * @public
   * <p>The date the replication task was created.</p>
   */
  ReplicationTaskCreationDate?: Date;

  /**
   * @public
   * <p>The date the replication task is scheduled to start.</p>
   */
  ReplicationTaskStartDate?: Date;

  /**
   * @public
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
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</p>
   */
  CdcStopPosition?: string;

  /**
   * @public
   * <p>Indicates the last checkpoint that occurred during a change data capture (CDC)
   *          operation. You can provide this value to the <code>CdcStartPosition</code> parameter to
   *          start a CDC operation that begins at that checkpoint.</p>
   */
  RecoveryCheckpoint?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * @public
   * <p>The statistics for the task, including elapsed time, tables loaded, and table
   *          errors.</p>
   */
  ReplicationTaskStats?: ReplicationTaskStats;

  /**
   * @public
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *             For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *          <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  TaskData?: string;

  /**
   * @public
   * <p>The ARN of the replication instance to which this task is moved in response to running
   *          the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html">
   *                <code>MoveReplicationTask</code>
   *             </a> operation. Otherwise, this response
   *          parameter isn't a member of the <code>ReplicationTask</code> object.</p>
   */
  TargetReplicationInstanceArn?: string;
}

/**
 * @public
 * <p></p>
 */
export interface CreateReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task that was created.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 */
export interface DeleteCertificateMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate.</p>
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 * <p>The SSL certificate that can be used to encrypt connections between the endpoints and
 *          the replication instance.</p>
 */
export interface Certificate {
  /**
   * @public
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter and
   *          must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or
   *          contain two consecutive hyphens.</p>
   */
  CertificateIdentifier?: string;

  /**
   * @public
   * <p>The date that the certificate was created.</p>
   */
  CertificateCreationDate?: Date;

  /**
   * @public
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * @public
   * <p>The location of an imported Oracle Wallet certificate for use with SSL. Example: <code>filebase64("$\{path.root\}/rds-ca-2019-root.sso")</code>
   *          </p>
   */
  CertificateWallet?: Uint8Array;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The owner of the certificate.</p>
   */
  CertificateOwner?: string;

  /**
   * @public
   * <p>The beginning date that the certificate is valid.</p>
   */
  ValidFromDate?: Date;

  /**
   * @public
   * <p>The final date that the certificate is valid.</p>
   */
  ValidToDate?: Date;

  /**
   * @public
   * <p>The signing algorithm for the certificate.</p>
   */
  SigningAlgorithm?: string;

  /**
   * @public
   * <p>The key length of the cryptographic algorithm being used.</p>
   */
  KeyLength?: number;
}

/**
 * @public
 */
export interface DeleteCertificateResponse {
  /**
   * @public
   * <p>The Secure Sockets Layer (SSL) certificate.</p>
   */
  Certificate?: Certificate;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteConnectionMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * @public
 * <p>Status of the connection between an endpoint and a replication instance, including
 *          Amazon Resource Names (ARNs) and the last error message issued.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The ARN of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * @public
   * <p>The ARN string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * @public
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
   * @public
   * <p>The error message when the connection last failed.</p>
   */
  LastFailureMessage?: string;

  /**
   * @public
   * <p>The identifier of the endpoint. Identifiers must begin with a letter and must contain only
   *          ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * @public
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   */
  ReplicationInstanceIdentifier?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteConnectionResponse {
  /**
   * @public
   * <p>The connection that is being deleted.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 */
export interface DeleteDataProviderMessage {
  /**
   * @public
   * <p>The identifier of the data provider to delete.</p>
   */
  DataProviderIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataProviderResponse {
  /**
   * @public
   * <p>The data provider that was deleted.</p>
   */
  DataProvider?: DataProvider;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteEndpointMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteEndpointResponse {
  /**
   * @public
   * <p>The endpoint that was deleted.</p>
   */
  Endpoint?: Endpoint;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the DMS event notification subscription to be deleted.</p>
   */
  SubscriptionName: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteEventSubscriptionResponse {
  /**
   * @public
   * <p>The event subscription that was deleted.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 * <p>The specified collector doesn't exist.</p>
 */
export class CollectorNotFoundFault extends __BaseException {
  readonly name: "CollectorNotFoundFault" = "CollectorNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CollectorNotFoundFault, __BaseException>) {
    super({
      name: "CollectorNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CollectorNotFoundFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteCollectorRequest {
  /**
   * @public
   * <p>The reference ID of the Fleet Advisor collector to delete.</p>
   */
  CollectorReferencedId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetAdvisorDatabasesRequest {
  /**
   * @public
   * <p>The IDs of the Fleet Advisor collector databases to delete.</p>
   */
  DatabaseIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetAdvisorDatabasesResponse {
  /**
   * @public
   * <p>The IDs of the databases that the operation deleted.</p>
   */
  DatabaseIds?: string[];
}

/**
 * @public
 * <p>The action or operation requested isn't valid.</p>
 */
export class InvalidOperationFault extends __BaseException {
  readonly name: "InvalidOperationFault" = "InvalidOperationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationFault, __BaseException>) {
    super({
      name: "InvalidOperationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationFault.prototype);
  }
}

/**
 * @public
 */
export interface DeleteInstanceProfileMessage {
  /**
   * @public
   * <p>The identifier of the instance profile to delete.</p>
   */
  InstanceProfileIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceProfileResponse {
  /**
   * @public
   * <p>The instance profile that was deleted.</p>
   */
  InstanceProfile?: InstanceProfile;
}

/**
 * @public
 */
export interface DeleteMigrationProjectMessage {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the migration project to delete.</p>
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMigrationProjectResponse {
  /**
   * @public
   * <p>The migration project that was deleted.</p>
   */
  MigrationProject?: MigrationProject;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationConfigMessage {
  /**
   * @public
   * <p>The replication config to delete.</p>
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationConfigResponse {
  /**
   * @public
   * <p>Configuration parameters returned for the DMS Serverless replication after it is deleted.</p>
   */
  ReplicationConfig?: ReplicationConfig;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationInstanceMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance to be deleted.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationInstanceResponse {
  /**
   * @public
   * <p>The replication instance that was deleted.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationSubnetGroupMessage {
  /**
   * @public
   * <p>The subnet group name of the replication instance.</p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationSubnetGroupResponse {}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task to be deleted.</p>
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationTaskResponse {
  /**
   * @public
   * <p>The deleted replication task.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationTaskAssessmentRunMessage {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the premigration assessment run to be deleted.</p>
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteReplicationTaskAssessmentRunResponse {
  /**
   * @public
   * <p>The <code>ReplicationTaskAssessmentRun</code> object for the deleted assessment
   *          run.</p>
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeAccountAttributesMessage {}

/**
 * @public
 * <p></p>
 */
export interface DescribeAccountAttributesResponse {
  /**
   * @public
   * <p>Account quota information.</p>
   */
  AccountQuotas?: AccountQuota[];

  /**
   * @public
   * <p>A unique DMS identifier for an account in a particular Amazon Web Services Region. The value of this
   *          identifier has the following format: <code>c99999999999</code>. DMS uses this identifier to
   *          name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket
   *          for storing task assessment reports in a given Amazon Web Services Region. The format of this S3 bucket
   *          name is the following:
   *                <code>dms-<i>AccountNumber</i>-<i>UniqueAccountIdentifier</i>.</code>
   *          Here is an example name for this default S3 bucket:
   *             <code>dms-111122223333-c44445555666</code>.</p>
   *          <note>
   *             <p>DMS supports the <code>UniqueAccountIdentifier</code> parameter in
   *             versions 3.1.4 and later.</p>
   *          </note>
   */
  UniqueAccountIdentifier?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeApplicableIndividualAssessmentsMessage {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of a migration task on which you want to base
   *          the default list of individual assessments.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * @public
   * <p>ARN of a replication instance on which you want to base the default list of individual
   *          assessments.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * @public
   * <p>Name of a database engine that the specified replication instance supports as a source.</p>
   */
  SourceEngineName?: string;

  /**
   * @public
   * <p>Name of a database engine that the specified replication instance supports as a target.</p>
   */
  TargetEngineName?: string;

  /**
   * @public
   * <p>Name of the migration type that each provided individual assessment must support.</p>
   */
  MigrationType?: MigrationTypeValue;

  /**
   * @public
   * <p>Maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>Optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeApplicableIndividualAssessmentsResponse {
  /**
   * @public
   * <p>List of names for the individual assessments supported by the premigration assessment
   *          run that you start based on the specified request parameters. For more information on the
   *          available individual assessments, including compatibility with different migration task
   *          configurations, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Working with premigration assessment runs</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  IndividualAssessmentNames?: string[];

  /**
   * @public
   * <p>Pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Identifies the name and value of a filter object. This filter is used to limit the
 *          number and type of DMS objects that are returned for a particular
 *             <code>Describe*</code> call or similar operation. Filters are used as an optional
 *          parameter for certain API operations. </p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter as specified for a <code>Describe*</code> or similar
   *          operation.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The filter value, which can specify one or more values used to narrow the returned results.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeCertificatesMessage {
  /**
   * @public
   * <p>Filters applied to the certificates described in the form of key-value pairs.
   *           Valid values are <code>certificate-arn</code> and <code>certificate-id</code>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 10</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeCertificatesResponse {
  /**
   * @public
   * <p>The pagination token.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The Secure Sockets Layer (SSL) certificates associated with the replication
   *          instance.</p>
   */
  Certificates?: Certificate[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeConnectionsMessage {
  /**
   * @public
   * <p>The filters applied to the connection.</p>
   *          <p>Valid filter names: endpoint-arn | replication-instance-arn</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeConnectionsResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A description of the connections.</p>
   */
  Connections?: Connection[];
}

/**
 * @public
 */
export interface DescribeConversionConfigurationMessage {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) for the schema conversion project to describe.</p>
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DescribeConversionConfigurationResponse {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) for the schema conversion project.</p>
   */
  MigrationProjectIdentifier?: string;

  /**
   * @public
   * <p>The configuration parameters for the schema conversion project.</p>
   */
  ConversionConfiguration?: string;
}

/**
 * @public
 */
export interface DescribeDataProvidersMessage {
  /**
   * @public
   * <p>Filters applied to the data providers described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeDataProvidersResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A description of data providers.</p>
   */
  DataProviders?: DataProvider[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEndpointsMessage {
  /**
   * @public
   * <p>Filters applied to the endpoints.</p>
   *          <p>Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEndpointsResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Endpoint description.</p>
   */
  Endpoints?: Endpoint[];
}

/**
 * @public
 */
export interface DescribeEndpointSettingsMessage {
  /**
   * @public
   * <p>The database engine used for your source or target endpoint.</p>
   */
  EngineName: string | undefined;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response
   *          so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * @enum
 */
export const EndpointSettingTypeValue = {
  BOOLEAN: "boolean",
  ENUM: "enum",
  INTEGER: "integer",
  STRING: "string",
} as const;

/**
 * @public
 */
export type EndpointSettingTypeValue = (typeof EndpointSettingTypeValue)[keyof typeof EndpointSettingTypeValue];

/**
 * @public
 * <p>Endpoint settings.</p>
 */
export interface EndpointSetting {
  /**
   * @public
   * <p>The name that you want to give the endpoint settings.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  Type?: EndpointSettingTypeValue;

  /**
   * @public
   * <p>Enumerated values to use for this endpoint.</p>
   */
  EnumValues?: string[];

  /**
   * @public
   * <p>A value that marks this endpoint setting as sensitive.</p>
   */
  Sensitive?: boolean;

  /**
   * @public
   * <p>The unit of measure for this endpoint setting.</p>
   */
  Units?: string;

  /**
   * @public
   * <p>The relevance or validity of an endpoint setting for an engine name and its endpoint type.</p>
   */
  Applicability?: string;

  /**
   * @public
   * <p>The minimum value of an endpoint setting that is of type <code>int</code>.</p>
   */
  IntValueMin?: number;

  /**
   * @public
   * <p>The maximum value of an endpoint setting that is of type <code>int</code>.</p>
   */
  IntValueMax?: number;

  /**
   * @public
   * <p>The default value of the endpoint setting if no value is specified using <code>CreateEndpoint</code> or <code>ModifyEndpoint</code>.</p>
   */
  DefaultValue?: string;
}

/**
 * @public
 */
export interface DescribeEndpointSettingsResponse {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Descriptions of the endpoint settings available for your source or target database engine.</p>
   */
  EndpointSettings?: EndpointSetting[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEndpointTypesMessage {
  /**
   * @public
   * <p>Filters applied to the endpoint types.</p>
   *          <p>Valid filter names: engine-name | endpoint-type</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Provides information about types of supported endpoints in response to a request by the
 *             <code>DescribeEndpointTypes</code> operation. This information includes the type of
 *          endpoint, the database engine name, and whether change data capture (CDC) is
 *          supported.</p>
 */
export interface SupportedEndpointType {
  /**
   * @public
   * <p>The database engine name. Valid values, depending on the EndpointType, include
   *          <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *          <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>,
   *          <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>,
   *          <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>,
   *          <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>,
   *          <code>"neptune"</code>, and <code>"babelfish"</code>.</p>
   */
  EngineName?: string;

  /**
   * @public
   * <p>Indicates if change data capture (CDC) is supported.</p>
   */
  SupportsCDC?: boolean;

  /**
   * @public
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue;

  /**
   * @public
   * <p>The earliest DMS engine version that supports this endpoint engine. Note that endpoint engines released with DMS versions earlier than 3.1.1 do not return a value for this parameter.</p>
   */
  ReplicationInstanceEngineMinimumVersion?: string;

  /**
   * @public
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora", this value would be "Amazon Aurora MySQL".</p>
   */
  EngineDisplayName?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEndpointTypesResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The types of endpoints that are supported.</p>
   */
  SupportedEndpointTypes?: SupportedEndpointType[];
}

/**
 * @public
 */
export interface DescribeEngineVersionsMessage {
  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   *          <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * @enum
 */
export const ReleaseStatusValues = {
  BETA: "beta",
  PROD: "prod",
} as const;

/**
 * @public
 */
export type ReleaseStatusValues = (typeof ReleaseStatusValues)[keyof typeof ReleaseStatusValues];

/**
 * @public
 * <p>Provides information about a replication instance version.</p>
 */
export interface EngineVersion {
  /**
   * @public
   * <p>The version number of the replication instance.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The lifecycle status of the replication instance version. Valid values are <code>DEPRECATED</code>,
   *          <code>DEFAULT_VERSION</code>, and <code>ACTIVE</code>.</p>
   */
  Lifecycle?: string;

  /**
   * @public
   * <p>The release status of the replication instance version.</p>
   */
  ReleaseStatus?: ReleaseStatusValues;

  /**
   * @public
   * <p>The date when the replication instance version became publicly available.</p>
   */
  LaunchDate?: Date;

  /**
   * @public
   * <p>The date when the replication instance will be automatically upgraded. This setting only applies
   *       if the <code>auto-minor-version</code> setting is enabled.</p>
   */
  AutoUpgradeDate?: Date;

  /**
   * @public
   * <p>The date when the replication instance version will be deprecated and can no longer be requested.</p>
   */
  DeprecationDate?: Date;

  /**
   * @public
   * <p>The date when the replication instance will have a version upgrade forced.</p>
   */
  ForceUpgradeDate?: Date;

  /**
   * @public
   * <p>The list of valid replication instance versions that you can upgrade to.</p>
   */
  AvailableUpgrades?: string[];
}

/**
 * @public
 */
export interface DescribeEngineVersionsResponse {
  /**
   * @public
   * <p>Returned <code>EngineVersion</code> objects that describe the replication instance engine versions used in the project.</p>
   */
  EngineVersions?: EngineVersion[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  /**
   * @public
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>Filters applied to the event categories.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Lists categories of events subscribed to, and generated by, the applicable DMS
 *          resource type. This data type appears in response to the
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_EventCategoryGroup.html">
 *                <code>DescribeEventCategories</code>
 *             </a>
 *          action.</p>
 */
export interface EventCategoryGroup {
  /**
   * @public
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p> A list of event categories from a source type that you've chosen.</p>
   */
  EventCategories?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEventCategoriesResponse {
  /**
   * @public
   * <p>A list of event categories.</p>
   */
  EventCategoryGroupList?: EventCategoryGroup[];
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  replication_instance: "replication-instance",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * <p></p>
 */
export interface DescribeEventsMessage {
  /**
   * @public
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * @public
   * <p>The type of DMS resource that generates events.</p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p>The start time for the events to be listed.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end time for the events to be listed.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The duration of the events to be listed.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>A list of event categories for the source type that you've chosen.</p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p>Filters applied to events. The only valid filter is <code>replication-instance-id</code>.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Describes an identifiable significant activity that affects a replication instance or
 *          task. This object can provide the message, the available event categories, the date and
 *          source of the event, and the DMS resource type.</p>
 */
export interface Event {
  /**
   * @public
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * @public
   * <p> The type of DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | endpoint | replication-task</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p>The event message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The event categories available for the specified source type.</p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p>The date of the event.</p>
   */
  Date?: Date;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEventsResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The events described.</p>
   */
  Events?: Event[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * @public
   * <p>The name of the DMS event subscription to be described.</p>
   */
  SubscriptionName?: string;

  /**
   * @public
   * <p>Filters applied to event subscriptions.</p>
   *          <p>Valid filter names: event-subscription-arn |  event-subscription-id </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeEventSubscriptionsResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A list of event subscriptions.</p>
   */
  EventSubscriptionsList?: EventSubscription[];
}

/**
 * @public
 */
export interface DescribeExtensionPackAssociationsMessage {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) for the migration project.</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>Filters applied to the extension pack associations described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 * <p>Provides error information about a schema conversion operation.</p>
 */
export interface DefaultErrorDetails {
  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Provides error information about a project.</p>
 */
export type ErrorDetails = ErrorDetails.DefaultErrorDetailsMember | ErrorDetails.$UnknownMember;

/**
 * @public
 */
export namespace ErrorDetails {
  /**
   * @public
   * <p>Error information about a project.</p>
   */
  export interface DefaultErrorDetailsMember {
    defaultErrorDetails: DefaultErrorDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    defaultErrorDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    defaultErrorDetails: (value: DefaultErrorDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ErrorDetails, visitor: Visitor<T>): T => {
    if (value.defaultErrorDetails !== undefined) return visitor.defaultErrorDetails(value.defaultErrorDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Provides information about a metadata model assessment exported to SQL.</p>
 */
export interface ExportSqlDetails {
  /**
   * @public
   * <p>The Amazon S3 object key for the object containing the exported metadata model assessment.</p>
   */
  S3ObjectKey?: string;

  /**
   * @public
   * <p>The URL for the object containing the exported metadata model assessment.</p>
   */
  ObjectURL?: string;
}

/**
 * @public
 * <p>Provides information about a schema conversion action.</p>
 */
export interface SchemaConversionRequest {
  /**
   * @public
   * <p>The schema conversion action status.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The identifier for the schema conversion action.</p>
   */
  RequestIdentifier?: string;

  /**
   * @public
   * <p>The migration project ARN.</p>
   */
  MigrationProjectArn?: string;

  /**
   * @public
   * <p>Provides error information about a project.</p>
   */
  Error?: ErrorDetails;

  /**
   * @public
   * <p>Provides information about a metadata model assessment exported to SQL.</p>
   */
  ExportSqlDetails?: ExportSqlDetails;
}

/**
 * @public
 */
export interface DescribeExtensionPackAssociationsResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A paginated list of extension pack associations for the specified migration project.</p>
   */
  Requests?: SchemaConversionRequest[];
}

/**
 * @public
 */
export interface DescribeFleetAdvisorCollectorsRequest {
  /**
   * @public
   * <p> If you specify any of the following filters, the output includes information for only
   *             those collectors that meet the filter criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>collector-referenced-id</code> – The ID of the collector agent,
   *                     for example <code>d4610ac5-e323-4ad9-bc50-eaf7249dfe9d</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>collector-name</code> – The name of the collector agent.</p>
   *             </li>
   *          </ul>
   *          <p>An example is: <code>describe-fleet-advisor-collectors --filter
   *                 Name="collector-referenced-id",Values="d4610ac5-e323-4ad9-bc50-eaf7249dfe9d"</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Sets the maximum number of records returned in the response.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const CollectorStatus = {
  ACTIVE: "ACTIVE",
  UNREGISTERED: "UNREGISTERED",
} as const;

/**
 * @public
 */
export type CollectorStatus = (typeof CollectorStatus)[keyof typeof CollectorStatus];

/**
 * @public
 * <p>Describes the last Fleet Advisor collector health check.</p>
 */
export interface CollectorHealthCheck {
  /**
   * @public
   * <p>The status of the Fleet Advisor collector.</p>
   */
  CollectorStatus?: CollectorStatus;

  /**
   * @public
   * <p>Whether the local collector can access its Amazon S3 bucket.</p>
   */
  LocalCollectorS3Access?: boolean;

  /**
   * @public
   * <p>Whether the web collector can access its Amazon S3 bucket.</p>
   */
  WebCollectorS3Access?: boolean;

  /**
   * @public
   * <p>Whether the role that you provided when creating the Fleet Advisor collector has sufficient permissions
   *             to access the Fleet Advisor web collector.</p>
   */
  WebCollectorGrantedRoleBasedAccess?: boolean;
}

/**
 * @public
 * <p>Describes a Fleet Advisor collector inventory.</p>
 */
export interface InventoryData {
  /**
   * @public
   * <p>The number of databases in the Fleet Advisor collector inventory.</p>
   */
  NumberOfDatabases?: number;

  /**
   * @public
   * <p>The number of schemas in the Fleet Advisor collector inventory.</p>
   */
  NumberOfSchemas?: number;
}

/**
 * @public
 * @enum
 */
export const VersionStatus = {
  OUTDATED: "OUTDATED",
  UNSUPPORTED: "UNSUPPORTED",
  UP_TO_DATE: "UP_TO_DATE",
} as const;

/**
 * @public
 */
export type VersionStatus = (typeof VersionStatus)[keyof typeof VersionStatus];

/**
 * @public
 * <p>Describes a Fleet Advisor collector.</p>
 */
export interface CollectorResponse {
  /**
   * @public
   * <p>The reference ID of the Fleet Advisor collector.</p>
   */
  CollectorReferencedId?: string;

  /**
   * @public
   * <p>The name of the Fleet Advisor collector .</p>
   */
  CollectorName?: string;

  /**
   * @public
   * <p>The version of your Fleet Advisor collector, in semantic versioning format, for example
   *                 <code>1.0.2</code>
   *          </p>
   */
  CollectorVersion?: string;

  /**
   * @public
   * <p>Whether the collector version is up to date.</p>
   */
  VersionStatus?: VersionStatus;

  /**
   * @public
   * <p>A summary description of the Fleet Advisor collector.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>The IAM role that grants permissions to access the specified Amazon S3 bucket.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>Describes the last Fleet Advisor collector health check.</p>
   */
  CollectorHealthCheck?: CollectorHealthCheck;

  /**
   * @public
   * <p>The timestamp of the last time the collector received data, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   */
  LastDataReceived?: string;

  /**
   * @public
   * <p>The timestamp when DMS registered the collector, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   */
  RegisteredDate?: string;

  /**
   * @public
   * <p>The timestamp when you created the collector, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   */
  CreatedDate?: string;

  /**
   * @public
   * <p>The timestamp when DMS last modified the collector, in the following format:
   *                 <code>2022-01-24T19:04:02.596113Z</code>
   *          </p>
   */
  ModifiedDate?: string;

  /**
   * @public
   * <p>Describes a Fleet Advisor collector inventory.</p>
   */
  InventoryData?: InventoryData;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorCollectorsResponse {
  /**
   * @public
   * <p>Provides descriptions of the Fleet Advisor collectors, including the collectors' name
   *             and ID, and the latest inventory data. </p>
   */
  Collectors?: CollectorResponse[];

  /**
   * @public
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorDatabasesRequest {
  /**
   * @public
   * <p> If you specify any of the following filters, the output includes information for only
   *             those databases that meet the filter criteria: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>database-id</code> – The ID of the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-name</code> – The name of the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-engine</code> – The name of the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>server-ip-address</code> – The IP address of the database
   *                     server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-ip-address</code> – The IP address of the
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>collector-name</code> – The name of the associated Fleet Advisor collector.</p>
   *             </li>
   *          </ul>
   *          <p>An example is: <code>describe-fleet-advisor-databases --filter
   *                 Name="database-id",Values="45"</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Sets the maximum number of records returned in the response.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Briefly describes a Fleet Advisor collector.</p>
 */
export interface CollectorShortInfoResponse {
  /**
   * @public
   * <p>The reference ID of the Fleet Advisor collector.</p>
   */
  CollectorReferencedId?: string;

  /**
   * @public
   * <p>The name of the Fleet Advisor collector.</p>
   */
  CollectorName?: string;
}

/**
 * @public
 * <p>Describes a server in a Fleet Advisor collector inventory.</p>
 */
export interface ServerShortInfoResponse {
  /**
   * @public
   * <p>The ID of a server in a Fleet Advisor collector inventory.</p>
   */
  ServerId?: string;

  /**
   * @public
   * <p>The IP address of a server in a Fleet Advisor collector inventory.</p>
   */
  IpAddress?: string;

  /**
   * @public
   * <p>The name address of a server in a Fleet Advisor collector inventory.</p>
   */
  ServerName?: string;
}

/**
 * @public
 * <p>Describes an inventory database instance for a Fleet Advisor collector.</p>
 */
export interface DatabaseInstanceSoftwareDetailsResponse {
  /**
   * @public
   * <p>The database engine of a database in a Fleet Advisor collector inventory, for example <code>Microsoft
   *                 SQL Server</code>.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The database engine version of a database in a Fleet Advisor collector inventory, for example
   *                 <code>2019</code>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The database engine edition of a database in a Fleet Advisor collector inventory, for example
   *                 <code>Express</code>.</p>
   */
  EngineEdition?: string;

  /**
   * @public
   * <p>The service pack level of the database.</p>
   */
  ServicePack?: string;

  /**
   * @public
   * <p>The support level of the database, for example <code>Mainstream support</code>.</p>
   */
  SupportLevel?: string;

  /**
   * @public
   * <p>The operating system architecture of the database.</p>
   */
  OsArchitecture?: number;

  /**
   * @public
   * <p>Information about the database engine software, for example <code>Mainstream support
   *                 ends on November 14th, 2024</code>.</p>
   */
  Tooltip?: string;
}

/**
 * @public
 * <p>Describes a database in a Fleet Advisor collector inventory.</p>
 */
export interface DatabaseResponse {
  /**
   * @public
   * <p>The ID of a database in a Fleet Advisor collector inventory.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The name of a database in a Fleet Advisor collector inventory. </p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The IP address of a database in a Fleet Advisor collector inventory. </p>
   */
  IpAddress?: string;

  /**
   * @public
   * <p>The number of schemas in a Fleet Advisor collector inventory database. </p>
   */
  NumberOfSchemas?: number;

  /**
   * @public
   * <p>The server name of a database in a Fleet Advisor collector inventory. </p>
   */
  Server?: ServerShortInfoResponse;

  /**
   * @public
   * <p>The software details of a database in a Fleet Advisor collector inventory, such as database engine and
   *             version.</p>
   */
  SoftwareDetails?: DatabaseInstanceSoftwareDetailsResponse;

  /**
   * @public
   * <p>A list of collectors associated with the database.</p>
   */
  Collectors?: CollectorShortInfoResponse[];
}

/**
 * @public
 */
export interface DescribeFleetAdvisorDatabasesResponse {
  /**
   * @public
   * <p>Provides descriptions of the Fleet Advisor collector databases, including the database's collector, ID,
   *             and name.</p>
   */
  Databases?: DatabaseResponse[];

  /**
   * @public
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorLsaAnalysisRequest {
  /**
   * @public
   * <p>Sets the maximum number of records returned in the response.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a large-scale assessment (LSA) analysis run by a Fleet Advisor collector.</p>
 */
export interface FleetAdvisorLsaAnalysisResponse {
  /**
   * @public
   * <p>The ID of an LSA analysis run by a Fleet Advisor collector.</p>
   */
  LsaAnalysisId?: string;

  /**
   * @public
   * <p>The status of an LSA analysis run by a Fleet Advisor collector.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorLsaAnalysisResponse {
  /**
   * @public
   * <p>A list of <code>FleetAdvisorLsaAnalysisResponse</code> objects.</p>
   */
  Analysis?: FleetAdvisorLsaAnalysisResponse[];

  /**
   * @public
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryRequest {
  /**
   * @public
   * <p> If you specify any of the following filters, the output includes information for only
   *             those schema objects that meet the filter criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>schema-id</code> – The ID of the schema, for example
   *                         <code>d4610ac5-e323-4ad9-bc50-eaf7249dfe9d</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>describe-fleet-advisor-schema-object-summary --filter
   *                 Name="schema-id",Values="50"</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Sets the maximum number of records returned in the response.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a schema object in a Fleet Advisor collector inventory.</p>
 */
export interface FleetAdvisorSchemaObjectResponse {
  /**
   * @public
   * <p>The ID of a schema object in a Fleet Advisor collector inventory.</p>
   */
  SchemaId?: string;

  /**
   * @public
   * <p>The type of the schema object, as reported by the database engine. Examples include
   *             the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>function</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>trigger</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYSTEM_TABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUE</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ObjectType?: string;

  /**
   * @public
   * <p>The number of objects in a schema object in a Fleet Advisor collector inventory.</p>
   */
  NumberOfObjects?: number;

  /**
   * @public
   * <p>The number of lines of code in a schema object in a Fleet Advisor collector inventory.</p>
   */
  CodeLineCount?: number;

  /**
   * @public
   * <p>The size level of the code in a schema object in a Fleet Advisor collector inventory.</p>
   */
  CodeSize?: number;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryResponse {
  /**
   * @public
   * <p>A collection of <code>FleetAdvisorSchemaObjectResponse</code> objects.</p>
   */
  FleetAdvisorSchemaObjects?: FleetAdvisorSchemaObjectResponse[];

  /**
   * @public
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemasRequest {
  /**
   * @public
   * <p> If you specify any of the following filters, the output includes information for only
   *             those schemas that meet the filter criteria:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>complexity</code> – The schema's complexity, for example
   *                         <code>Simple</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-id</code> – The ID of the schema's database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-ip-address</code> – The IP address of the schema's
   *                     database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-name</code> – The name of the schema's database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database-engine</code> – The name of the schema database's
   *                     engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>original-schema-name</code> – The name of the schema's database's
   *                     main schema.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>schema-id</code> – The ID of the schema, for example
   *                         <code>15</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>schema-name</code> – The name of the schema.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>server-ip-address</code> – The IP address of the schema
   *                     database's server.</p>
   *             </li>
   *          </ul>
   *          <p>An example is: <code>describe-fleet-advisor-schemas --filter
   *                 Name="schema-id",Values="50"</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Sets the maximum number of records returned in the response.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Describes a database in a Fleet Advisor collector inventory.</p>
 */
export interface DatabaseShortInfoResponse {
  /**
   * @public
   * <p>The ID of a database in a Fleet Advisor collector inventory.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The name of a database in a Fleet Advisor collector inventory.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The IP address of a database in a Fleet Advisor collector inventory.</p>
   */
  DatabaseIpAddress?: string;

  /**
   * @public
   * <p>The database engine of a database in a Fleet Advisor collector inventory, for example
   *                 <code>PostgreSQL</code>.</p>
   */
  DatabaseEngine?: string;
}

/**
 * @public
 * <p>Describes a schema in a Fleet Advisor collector inventory.</p>
 */
export interface SchemaShortInfoResponse {
  /**
   * @public
   * <p>The ID of a schema in a Fleet Advisor collector inventory.</p>
   */
  SchemaId?: string;

  /**
   * @public
   * <p>The name of a schema in a Fleet Advisor collector inventory.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The ID of a database in a Fleet Advisor collector inventory.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The name of a database in a Fleet Advisor collector inventory.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The IP address of a database in a Fleet Advisor collector inventory.</p>
   */
  DatabaseIpAddress?: string;
}

/**
 * @public
 * <p>Describes a schema in a Fleet Advisor collector inventory.</p>
 */
export interface SchemaResponse {
  /**
   * @public
   * <p>The number of lines of code in a schema in a Fleet Advisor collector inventory.</p>
   */
  CodeLineCount?: number;

  /**
   * @public
   * <p>The size level of the code in a schema in a Fleet Advisor collector inventory.</p>
   */
  CodeSize?: number;

  /**
   * @public
   * <p>The complexity level of the code in a schema in a Fleet Advisor collector inventory.</p>
   */
  Complexity?: string;

  /**
   * @public
   * <p>The database server for a schema in a Fleet Advisor collector inventory.</p>
   */
  Server?: ServerShortInfoResponse;

  /**
   * @public
   * <p>The database for a schema in a Fleet Advisor collector inventory.</p>
   */
  DatabaseInstance?: DatabaseShortInfoResponse;

  /**
   * @public
   * <p>The ID of a schema in a Fleet Advisor collector inventory.</p>
   */
  SchemaId?: string;

  /**
   * @public
   * <p>The name of a schema in a Fleet Advisor collector inventory.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>Describes a schema in a Fleet Advisor collector inventory.</p>
   */
  OriginalSchema?: SchemaShortInfoResponse;

  /**
   * @public
   * <p>The similarity value for a schema in a Fleet Advisor collector inventory. A higher similarity value
   *             indicates that a schema is likely to be a duplicate.</p>
   */
  Similarity?: number;
}

/**
 * @public
 */
export interface DescribeFleetAdvisorSchemasResponse {
  /**
   * @public
   * <p>A collection of <code>SchemaResponse</code> objects.</p>
   */
  FleetAdvisorSchemas?: SchemaResponse[];

  /**
   * @public
   * <p>If <code>NextToken</code> is returned, there are more results available. The value of
   *                 <code>NextToken</code> is a unique pagination token for each page. Make the call
   *             again using the returned token to retrieve the next page. Keep all other arguments
   *             unchanged. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeInstanceProfilesMessage {
  /**
   * @public
   * <p>Filters applied to the instance profiles described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeInstanceProfilesResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A description of instance profiles.</p>
   */
  InstanceProfiles?: InstanceProfile[];
}

/**
 * @public
 */
export interface DescribeMetadataModelAssessmentsMessage {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the migration project.</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>Filters applied to the metadata model assessments described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *             The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *             make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 */
export interface DescribeMetadataModelAssessmentsResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A paginated list of metadata model assessments for the specified migration project.</p>
   */
  Requests?: SchemaConversionRequest[];
}

/**
 * @public
 */
export interface DescribeMetadataModelConversionsMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>Filters applied to the metadata model conversions described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 */
export interface DescribeMetadataModelConversionsResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A paginated list of metadata model conversions.</p>
   */
  Requests?: SchemaConversionRequest[];
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsAsScriptMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>Filters applied to the metadata model exports described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsAsScriptResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A paginated list of metadata model exports.</p>
   */
  Requests?: SchemaConversionRequest[];
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsToTargetMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>Filters applied to the metadata model exports described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 */
export interface DescribeMetadataModelExportsToTargetResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A paginated list of metadata model exports.</p>
   */
  Requests?: SchemaConversionRequest[];
}

/**
 * @public
 */
export interface DescribeMetadataModelImportsMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>Filters applied to the metadata model imports described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A paginated list of metadata model imports.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 */
export interface DescribeMetadataModelImportsResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A paginated list of metadata model imports.</p>
   */
  Requests?: SchemaConversionRequest[];
}

/**
 * @public
 */
export interface DescribeMigrationProjectsMessage {
  /**
   * @public
   * <p>Filters applied to the migration projects described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, DMS includes a pagination token
   *          in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeMigrationProjectsResponse {
  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page of results.
   *          If this parameter is specified, the response includes only records beyond the marker, up to the
   *          value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>Marker</code> is returned by a previous response, there are more results available.
   *          The value of <code>Marker</code> is a unique pagination token for each page. To retrieve the next page,
   *          make the call again using the returned token and keeping all other arguments unchanged.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A description of migration projects.</p>
   */
  MigrationProjects?: MigrationProject[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeOrderableReplicationInstancesMessage {
  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>In response to the <code>DescribeOrderableReplicationInstances</code> operation, this
 *          object describes an available replication instance. This description includes the
 *          replication instance's type, engine version, and allocated storage.</p>
 */
export interface OrderableReplicationInstance {
  /**
   * @public
   * <p>The version of the replication engine.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * @public
   * <p>The type of storage used by the replication instance.</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   */
  MinAllocatedStorage?: number;

  /**
   * @public
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * @public
   * <p>The default amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  DefaultAllocatedStorage?: number;

  /**
   * @public
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  IncludedAllocatedStorage?: number;

  /**
   * @public
   * <p>List of Availability Zones for this replication instance.</p>
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * <p>The value returned when the specified <code>EngineVersion</code> of the replication
   *          instance is in Beta or test mode. This indicates some features might not work as expected.</p>
   *          <note>
   *             <p>DMS supports the <code>ReleaseStatus</code> parameter in versions 3.1.4 and later.</p>
   *          </note>
   */
  ReleaseStatus?: ReleaseStatusValues;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeOrderableReplicationInstancesResponse {
  /**
   * @public
   * <p>The order-able replication instances available.</p>
   */
  OrderableReplicationInstances?: OrderableReplicationInstance[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * @public
   * <p></p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

/**
 * @public
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsResponse {
  /**
   * @public
   * <p>The pending maintenance action.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface DescribeRecommendationLimitationsRequest {
  /**
   * @public
   * <p>Filters applied to the limitations described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, Fleet Advisor includes a pagination token
   *             in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page
   *             of results. If this parameter is specified, the response includes only records beyond
   *             the marker, up to the value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information about the limitations of target Amazon Web Services engines.</p>
 *          <p>Your source database might include features that the target Amazon Web Services engine doesn't
 *             support. Fleet Advisor lists these features as limitations. You should consider these
 *             limitations during database migration. For each limitation, Fleet Advisor recommends an
 *             action that you can take to address or avoid this limitation.</p>
 */
export interface Limitation {
  /**
   * @public
   * <p>The identifier of the source database.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The name of the target engine that Fleet Advisor should use in the target engine
   *             recommendation. Valid values include <code>"rds-aurora-mysql"</code>,
   *                 <code>"rds-aurora-postgresql"</code>, <code>"rds-mysql"</code>,
   *                 <code>"rds-oracle"</code>, <code>"rds-sql-server"</code>, and
   *                 <code>"rds-postgresql"</code>.</p>
   */
  EngineName?: string;

  /**
   * @public
   * <p>The name of the limitation. Describes unsupported database features, migration action
   *             items, and other limitations.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the limitation. Provides additional information about the limitation,
   *             and includes recommended actions that you can take to address or avoid this
   *             limitation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The impact of the limitation. You can use this parameter to prioritize limitations
   *             that you want to address. Valid values include <code>"Blocker"</code>,
   *                 <code>"High"</code>, <code>"Medium"</code>, and <code>"Low"</code>.</p>
   */
  Impact?: string;

  /**
   * @public
   * <p>The type of the limitation, such as action required, upgrade required, and limited
   *             feature.</p>
   */
  Type?: string;
}

/**
 * @public
 */
export interface DescribeRecommendationLimitationsResponse {
  /**
   * @public
   * <p>The unique pagination token returned for you to pass to a subsequent request. Fleet
   *             Advisor returns this token when the number of records in the response is greater than
   *             the <code>MaxRecords</code> value. To retrieve the next page, make the call again using
   *             the returned token and keeping all other arguments unchanged.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of limitations for recommendations of target Amazon Web Services engines.</p>
   */
  Limitations?: Limitation[];
}

/**
 * @public
 */
export interface DescribeRecommendationsRequest {
  /**
   * @public
   * <p>Filters applied to the target engine recommendations described in the form of
   *             key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than
   *             the specified <code>MaxRecords</code> value, Fleet Advisor includes a pagination token
   *             in the response so that you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>Specifies the unique pagination token that makes it possible to display the next page
   *             of results. If this parameter is specified, the response includes only records beyond
   *             the marker, up to the value specified by <code>MaxRecords</code>.</p>
   *          <p>If <code>NextToken</code> is returned by a previous response, there are more results
   *             available. The value of <code>NextToken</code> is a unique pagination token for each
   *             page. Make the call again using the returned token to retrieve the next page. Keep all
   *             other arguments unchanged.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information that describes the requirements to the target engine on
 *             Amazon RDS.</p>
 */
export interface RdsRequirements {
  /**
   * @public
   * <p>The required target Amazon RDS engine edition.</p>
   */
  EngineEdition?: string;

  /**
   * @public
   * <p>The required number of virtual CPUs (vCPU) on the Amazon RDS DB instance.</p>
   */
  InstanceVcpu?: number;

  /**
   * @public
   * <p>The required memory on the Amazon RDS DB instance.</p>
   */
  InstanceMemory?: number;

  /**
   * @public
   * <p>The required Amazon RDS DB instance storage size.</p>
   */
  StorageSize?: number;

  /**
   * @public
   * <p>The required number of I/O operations completed each second (IOPS) on your Amazon RDS DB
   *             instance.</p>
   */
  StorageIops?: number;

  /**
   * @public
   * <p>The required deployment option for the Amazon RDS DB instance. Valid values include
   *                 <code>"MULTI_AZ"</code> for Multi-AZ deployments and <code>"SINGLE_AZ"</code> for
   *             Single-AZ deployments.</p>
   */
  DeploymentOption?: string;

  /**
   * @public
   * <p>The required target Amazon RDS engine version.</p>
   */
  EngineVersion?: string;
}

/**
 * @public
 * <p>Provides information that describes the configuration of the recommended target engine
 *             on Amazon RDS.</p>
 */
export interface RdsConfiguration {
  /**
   * @public
   * <p>Describes the recommended target Amazon RDS engine edition.</p>
   */
  EngineEdition?: string;

  /**
   * @public
   * <p>Describes the recommended target Amazon RDS instance type.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>Describes the number of virtual CPUs (vCPU) on the recommended Amazon RDS DB instance that
   *             meets your requirements.</p>
   */
  InstanceVcpu?: number;

  /**
   * @public
   * <p>Describes the memory on the recommended Amazon RDS DB instance that meets your
   *             requirements.</p>
   */
  InstanceMemory?: number;

  /**
   * @public
   * <p>Describes the storage type of the recommended Amazon RDS DB instance that meets your
   *             requirements.</p>
   *          <p>Amazon RDS provides three storage types: General Purpose SSD (also known as gp2 and gp3),
   *             Provisioned IOPS SSD (also known as io1), and magnetic (also known as standard).</p>
   */
  StorageType?: string;

  /**
   * @public
   * <p>Describes the storage size of the recommended Amazon RDS DB instance that meets your
   *             requirements.</p>
   */
  StorageSize?: number;

  /**
   * @public
   * <p>Describes the number of I/O operations completed each second (IOPS) on the recommended
   *             Amazon RDS DB instance that meets your requirements.</p>
   */
  StorageIops?: number;

  /**
   * @public
   * <p>Describes the deployment option for the recommended Amazon RDS DB instance. The deployment
   *             options include Multi-AZ and Single-AZ deployments. Valid values include
   *                 <code>"MULTI_AZ"</code> and <code>"SINGLE_AZ"</code>.</p>
   */
  DeploymentOption?: string;

  /**
   * @public
   * <p>Describes the recommended target Amazon RDS engine version.</p>
   */
  EngineVersion?: string;
}

/**
 * @public
 * <p>Provides information that describes a recommendation of a target engine on
 *             Amazon RDS.</p>
 */
export interface RdsRecommendation {
  /**
   * @public
   * <p>Supplemental information about the requirements to the recommended target database on
   *             Amazon RDS.</p>
   */
  RequirementsToTarget?: RdsRequirements;

  /**
   * @public
   * <p>Supplemental information about the configuration of the recommended target database on
   *             Amazon RDS.</p>
   */
  TargetConfiguration?: RdsConfiguration;
}

/**
 * @public
 * <p>Provides information about the target engine for the specified source database.</p>
 */
export interface RecommendationData {
  /**
   * @public
   * <p>The recommendation of a target Amazon RDS database engine.</p>
   */
  RdsEngine?: RdsRecommendation;
}

/**
 * @public
 * <p>Provides information that describes a recommendation of a target engine.</p>
 *          <p>A <i>recommendation</i> is a set of possible Amazon Web Services target engines that
 *             you can choose to migrate your source on-premises database. In this set, Fleet Advisor
 *             suggests a single target engine as the right sized migration destination. To determine
 *             this rightsized migration destination, Fleet Advisor uses the inventory metadata and
 *             metrics from data collector. You can use recommendations before the start of migration
 *             to save costs and reduce risks.</p>
 *          <p>With recommendations, you can explore different target options and compare metrics, so
 *             you can make an informed decision when you choose the migration target.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The identifier of the source database for which Fleet Advisor provided this
   *             recommendation.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The name of the target engine. Valid values include <code>"rds-aurora-mysql"</code>,
   *                 <code>"rds-aurora-postgresql"</code>, <code>"rds-mysql"</code>,
   *                 <code>"rds-oracle"</code>, <code>"rds-sql-server"</code>, and
   *                 <code>"rds-postgresql"</code>.</p>
   */
  EngineName?: string;

  /**
   * @public
   * <p>The date when Fleet Advisor created the target engine recommendation.</p>
   */
  CreatedDate?: string;

  /**
   * @public
   * <p>The status of the target engine recommendation. Valid values include
   *                 <code>"alternate"</code>, <code>"in-progress"</code>, <code>"not-viable"</code>, and
   *                 <code>"recommended"</code>.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Indicates that this target is the rightsized migration destination.</p>
   */
  Preferred?: boolean;

  /**
   * @public
   * <p>The settings in JSON format for the preferred target engine parameters. These
   *             parameters include capacity, resource utilization, and the usage type (production,
   *             development, or testing).</p>
   */
  Settings?: RecommendationSettings;

  /**
   * @public
   * <p>The recommendation of a target engine for the specified source database.</p>
   */
  Data?: RecommendationData;
}

/**
 * @public
 */
export interface DescribeRecommendationsResponse {
  /**
   * @public
   * <p>The unique pagination token returned for you to pass to a subsequent request. Fleet
   *             Advisor returns this token when the number of records in the response is greater than
   *             the <code>MaxRecords</code> value. To retrieve the next page, make the call again using
   *             the returned token and keeping all other arguments unchanged.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of recommendations of target engines that Fleet Advisor created for the
   *             source database.</p>
   */
  Recommendations?: Recommendation[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeRefreshSchemasStatusMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RefreshSchemasStatusTypeValue = {
  FAILED: "failed",
  REFRESHING: "refreshing",
  SUCCESSFUL: "successful",
} as const;

/**
 * @public
 */
export type RefreshSchemasStatusTypeValue =
  (typeof RefreshSchemasStatusTypeValue)[keyof typeof RefreshSchemasStatusTypeValue];

/**
 * @public
 * <p>Provides information that describes status of a schema at an endpoint specified by the
 *          <code>DescribeRefreshSchemaStatus</code> operation.</p>
 */
export interface RefreshSchemasStatus {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * @public
   * <p>The status of the schema.</p>
   */
  Status?: RefreshSchemasStatusTypeValue;

  /**
   * @public
   * <p>The date the schema was last refreshed.</p>
   */
  LastRefreshDate?: Date;

  /**
   * @public
   * <p>The last failure message for the schema.</p>
   */
  LastFailureMessage?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeRefreshSchemasStatusResponse {
  /**
   * @public
   * <p>The status of the schema.</p>
   */
  RefreshSchemasStatus?: RefreshSchemasStatus;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationConfigsMessage {
  /**
   * @public
   * <p>Filters applied to the replication configs.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   *          <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationConfigsResponse {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response
   *          includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Returned configuration parameters that describe each provisioned DMS Serverless replication.</p>
   */
  ReplicationConfigs?: ReplicationConfig[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationInstancesMessage {
  /**
   * @public
   * <p>Filters applied to replication instances.</p>
   *          <p>Valid filter names: replication-instance-arn | replication-instance-id |
   *          replication-instance-class | engine-version</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationInstancesResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The replication instances described.</p>
   */
  ReplicationInstances?: ReplicationInstance[];
}

/**
 * @public
 */
export interface DescribeReplicationInstanceTaskLogsMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Contains metadata for a replication instance task log.</p>
 */
export interface ReplicationInstanceTaskLog {
  /**
   * @public
   * <p>The name of the replication task.</p>
   */
  ReplicationTaskName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * @public
   * <p>The size, in bytes, of the replication task log.</p>
   */
  ReplicationInstanceTaskLogSize?: number;
}

/**
 * @public
 */
export interface DescribeReplicationInstanceTaskLogsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * @public
   * <p>An array of replication task log metadata. Each member of the array contains the
   *          replication task name, ARN, and task log size (in bytes). </p>
   */
  ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationsMessage {
  /**
   * @public
   * <p>Filters applied to the replications.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   *          <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Information about provisioning resources for an DMS serverless replication.</p>
 */
export interface ProvisionData {
  /**
   * @public
   * <p>The current provisioning state </p>
   */
  ProvisionState?: string;

  /**
   * @public
   * <p>The number of capacity units the replication is using.</p>
   */
  ProvisionedCapacityUnits?: number;

  /**
   * @public
   * <p>The timestamp when DMS provisioned replication resources.</p>
   */
  DateProvisioned?: Date;

  /**
   * @public
   * <p>Whether the new provisioning is available to the replication.</p>
   */
  IsNewProvisioningAvailable?: boolean;

  /**
   * @public
   * <p>The timestamp when provisioning became available.</p>
   */
  DateNewProvisioningDataAvailable?: Date;

  /**
   * @public
   * <p>A message describing the reason that DMS provisioned new resources for the serverless replication.</p>
   */
  ReasonForNewProvisioningData?: string;
}

/**
 * @public
 * <p>This object provides a collection of statistics about a serverless replication.</p>
 */
export interface ReplicationStats {
  /**
   * @public
   * <p>The percent complete for the full load serverless replication.</p>
   */
  FullLoadProgressPercent?: number;

  /**
   * @public
   * <p>The elapsed time of the replication, in milliseconds.</p>
   */
  ElapsedTimeMillis?: number;

  /**
   * @public
   * <p>The number of tables loaded for this replication.</p>
   */
  TablesLoaded?: number;

  /**
   * @public
   * <p>The number of tables currently loading for this replication.</p>
   */
  TablesLoading?: number;

  /**
   * @public
   * <p>The number of tables queued for this replication.</p>
   */
  TablesQueued?: number;

  /**
   * @public
   * <p>The number of errors that have occured for this replication.</p>
   */
  TablesErrored?: number;

  /**
   * @public
   * <p>The date the replication was started either with a fresh start or a target reload.</p>
   */
  FreshStartDate?: Date;

  /**
   * @public
   * <p>The date the replication is scheduled to start.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>The date the replication was stopped.</p>
   */
  StopDate?: Date;

  /**
   * @public
   * <p>The date the replication full load was started.</p>
   */
  FullLoadStartDate?: Date;

  /**
   * @public
   * <p>The date the replication full load was finished.</p>
   */
  FullLoadFinishDate?: Date;
}

/**
 * @public
 * <p>Provides information that describes a serverless replication created by the <code>CreateReplication</code> operation.</p>
 */
export interface Replication {
  /**
   * @public
   * <p>The identifier for the <code>ReplicationConfig</code> associated with the replication.</p>
   */
  ReplicationConfigIdentifier?: string;

  /**
   * @public
   * <p>The Amazon Resource Name for the <code>ReplicationConfig</code> associated with the replication.</p>
   */
  ReplicationConfigArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name for an existing <code>Endpoint</code> the serverless replication uses for its data source.</p>
   */
  SourceEndpointArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name for an existing <code>Endpoint</code> the serverless replication uses for its data target.</p>
   */
  TargetEndpointArn?: string;

  /**
   * @public
   * <p>The type of the serverless replication.</p>
   */
  ReplicationType?: MigrationTypeValue;

  /**
   * @public
   * <p>The current status of the serverless replication.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>Information about provisioning resources for an DMS serverless replication.</p>
   */
  ProvisionData?: ProvisionData;

  /**
   * @public
   * <p>The reason the replication task was stopped. This response parameter can return one of
   *          the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason NORMAL"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECOVERABLE_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FATAL_ERROR"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason FULL_LOAD_ONLY_FINISHED"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_FULL_LOAD"</code> – Full load completed, with cached changes not applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_CACHED_EVENTS"</code>  – Full load completed, with cached changes applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason EXPRESS_LICENSE_LIMITS_REACHED"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AFTER_DDL_APPLY"</code> – User-defined stop task after DDL applied</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_MEMORY"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_DUE_TO_LOW_DISK"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_SERVER_TIME"</code> – User-defined server time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason STOPPED_AT_COMMIT_TIME"</code> –  User-defined commit time for stopping task</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECONFIGURATION_RESTART"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"Stop Reason RECYCLE_TASK"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  StopReason?: string;

  /**
   * @public
   * <p>Error and other information about why a serverless replication failed.</p>
   */
  FailureMessages?: string[];

  /**
   * @public
   * <p>This object provides a collection of statistics about a serverless replication.</p>
   */
  ReplicationStats?: ReplicationStats;

  /**
   * @public
   * <p>The replication type.</p>
   */
  StartReplicationType?: string;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          <code>CdcStartTime</code> or <code>CdcStartPosition</code> to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          <code>CdcStartTime</code> or <code>CdcStartPosition</code> to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   */
  CdcStopPosition?: string;

  /**
   * @public
   * <p>Indicates the last checkpoint that occurred during a change data capture (CDC)
   *          operation. You can provide this value to the <code>CdcStartPosition</code> parameter to
   *          start a CDC operation that begins at that checkpoint.</p>
   */
  RecoveryCheckpoint?: string;

  /**
   * @public
   * <p>The time the serverless replication was created.</p>
   */
  ReplicationCreateTime?: Date;

  /**
   * @public
   * <p>The time the serverless replication was updated.</p>
   */
  ReplicationUpdateTime?: Date;

  /**
   * @public
   * <p>The timestamp when replication was last stopped.</p>
   */
  ReplicationLastStopTime?: Date;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationsResponse {
  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The replication descriptions.</p>
   */
  Replications?: Replication[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationSubnetGroupsMessage {
  /**
   * @public
   * <p>Filters applied to replication subnet groups.</p>
   *          <p>Valid filter names: replication-subnet-group-id</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationSubnetGroupsResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A description of the replication subnet groups.</p>
   */
  ReplicationSubnetGroups?: ReplicationSubnetGroup[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTableStatisticsMessage {
  /**
   * @public
   * <p>The replication config to describe.</p>
   */
  ReplicationConfigArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   *          <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *          the remaining results can be retrieved. </p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Filters applied to the replication table statistics.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a collection of table statistics in response to a request by the
 *          <code>DescribeTableStatistics</code> operation.</p>
 */
export interface TableStatistics {
  /**
   * @public
   * <p>The schema name.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * @public
   * <p>The number of insert actions performed on a table.</p>
   */
  Inserts?: number;

  /**
   * @public
   * <p>The number of delete actions performed on a table.</p>
   */
  Deletes?: number;

  /**
   * @public
   * <p>The number of update actions performed on a table.</p>
   */
  Updates?: number;

  /**
   * @public
   * <p>The data definition language (DDL) used to build and modify the structure of your tables.</p>
   */
  Ddls?: number;

  /**
   * @public
   * <p>The number of insert actions applied on a target table.</p>
   */
  AppliedInserts?: number;

  /**
   * @public
   * <p>The number of delete actions applied on a target table.</p>
   */
  AppliedDeletes?: number;

  /**
   * @public
   * <p>The number of update actions applied on a target table.</p>
   */
  AppliedUpdates?: number;

  /**
   * @public
   * <p>The number of data definition language (DDL) statements used to build and modify the structure
   *          of your tables applied on the target.</p>
   */
  AppliedDdls?: number;

  /**
   * @public
   * <p>The number of rows added during the full load operation.</p>
   */
  FullLoadRows?: number;

  /**
   * @public
   * <p>The number of rows that failed conditional checks during the full load operation (valid
   *          only for migrations where DynamoDB is the target).</p>
   */
  FullLoadCondtnlChkFailedRows?: number;

  /**
   * @public
   * <p>The number of rows that failed to load during the full load operation (valid only for
   *          migrations where DynamoDB is the target).</p>
   */
  FullLoadErrorRows?: number;

  /**
   * @public
   * <p>The time when the full load operation started.</p>
   */
  FullLoadStartTime?: Date;

  /**
   * @public
   * <p>The time when the full load operation completed.</p>
   */
  FullLoadEndTime?: Date;

  /**
   * @public
   * <p>A value that indicates if the table was reloaded (<code>true</code>)
   *          or loaded as part of a new full load operation (<code>false</code>).</p>
   */
  FullLoadReloaded?: boolean;

  /**
   * @public
   * <p>The last time a table was updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * @public
   * <p>The state of the tables described.</p>
   *          <p>Valid states: Table does not exist | Before load | Full load | Table completed | Table
   *          cancelled | Table error | Table is being reloaded</p>
   */
  TableState?: string;

  /**
   * @public
   * <p>The number of records that have yet to be validated.</p>
   */
  ValidationPendingRecords?: number;

  /**
   * @public
   * <p>The number of records that failed validation.</p>
   */
  ValidationFailedRecords?: number;

  /**
   * @public
   * <p>The number of records that couldn't be validated.</p>
   */
  ValidationSuspendedRecords?: number;

  /**
   * @public
   * <p>The validation state of the table.</p>
   *          <p>This parameter can have the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Not enabled – Validation isn't enabled for the table in the migration
   *                task.</p>
   *             </li>
   *             <li>
   *                <p>Pending records – Some records in the table are waiting for validation.</p>
   *             </li>
   *             <li>
   *                <p>Mismatched records – Some records in the table don't match between the source
   *                and target.</p>
   *             </li>
   *             <li>
   *                <p>Suspended records – Some records in the table couldn't be validated.</p>
   *             </li>
   *             <li>
   *                <p>No primary key  –The table couldn't be validated because it has no primary
   *                key.</p>
   *             </li>
   *             <li>
   *                <p>Table error – The table wasn't validated because it's in an error state
   *                and some data wasn't migrated.</p>
   *             </li>
   *             <li>
   *                <p>Validated – All rows in the table are validated. If the table is updated, the
   *                status can change from Validated.</p>
   *             </li>
   *             <li>
   *                <p>Error – The table couldn't be validated because of an unexpected
   *                error.</p>
   *             </li>
   *             <li>
   *                <p>Pending validation – The table is waiting validation.</p>
   *             </li>
   *             <li>
   *                <p>Preparing table – Preparing the table enabled in the migration task for validation.</p>
   *             </li>
   *             <li>
   *                <p>Pending revalidation – All rows in the table are pending validation after the table was updated.</p>
   *             </li>
   *          </ul>
   */
  ValidationState?: string;

  /**
   * @public
   * <p>Additional details about the state of validation.</p>
   */
  ValidationStateDetails?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTableStatisticsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication config.</p>
   */
  ReplicationConfigArn?: string;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *          the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Returns table statistics on the replication, including table name, rows inserted, rows updated, and rows deleted.</p>
   */
  ReplicationTableStatistics?: TableStatistics[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentResultsMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input
   *          parameter is specified, the API returns only one result and ignore the values of the
   *             <code>MaxRecords</code> and <code>Marker</code> parameters. </p>
   */
  ReplicationTaskArn?: string;

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p> The task assessment report in JSON format. </p>
 */
export interface ReplicationTaskAssessmentResult {
  /**
   * @public
   * <p> The replication task identifier of the task on which the task assessment was run.
   *       </p>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;

  /**
   * @public
   * <p>The date the task assessment was completed. </p>
   */
  ReplicationTaskLastAssessmentDate?: Date;

  /**
   * @public
   * <p> The status of the task assessment. </p>
   */
  AssessmentStatus?: string;

  /**
   * @public
   * <p> The file containing the results of the task assessment. </p>
   */
  AssessmentResultsFile?: string;

  /**
   * @public
   * <p> The task assessment results in JSON format. </p>
   *          <p>The response object only contains this field if you provide <a>DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn</a>
   *            in the request.</p>
   */
  AssessmentResults?: string;

  /**
   * @public
   * <p> The URL of the S3 object containing the task assessment results. </p>
   *          <p>The response object only contains this field if you provide <a>DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn</a>
   *            in the request.</p>
   */
  S3ObjectUrl?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentResultsResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>- The Amazon S3 bucket where the task assessment report is located. </p>
   */
  BucketName?: string;

  /**
   * @public
   * <p> The task assessment report. </p>
   */
  ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentRunsMessage {
  /**
   * @public
   * <p>Filters applied to the premigration assessment runs described in the form of key-value pairs.</p>
   *          <p>Valid filter names: <code>replication-task-assessment-run-arn</code>, <code>replication-task-arn</code>,
   *          <code>replication-instance-arn</code>, <code>status</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentRunsResponse {
  /**
   * @public
   * <p>A pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>One or more premigration assessment runs as specified by <code>Filters</code>.</p>
   */
  ReplicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTaskIndividualAssessmentsMessage {
  /**
   * @public
   * <p>Filters applied to the individual assessments described in the form of key-value
   *          pairs.</p>
   *          <p>Valid filter names: <code>replication-task-assessment-run-arn</code>,
   *             <code>replication-task-arn</code>, <code>status</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Provides information that describes an individual assessment from a premigration
 *          assessment run.</p>
 */
export interface ReplicationTaskIndividualAssessment {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of this individual assessment.</p>
   */
  ReplicationTaskIndividualAssessmentArn?: string;

  /**
   * @public
   * <p>ARN of the premigration assessment run that is created to run this individual
   *          assessment.</p>
   */
  ReplicationTaskAssessmentRunArn?: string;

  /**
   * @public
   * <p>Name of this individual assessment.</p>
   */
  IndividualAssessmentName?: string;

  /**
   * @public
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
   * @public
   * <p>Date when this individual assessment was started as part of running the
   *             <code>StartReplicationTaskAssessmentRun</code> operation.</p>
   */
  ReplicationTaskIndividualAssessmentStartDate?: Date;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTaskIndividualAssessmentsResponse {
  /**
   * @public
   * <p>A pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>One or more individual assessments as specified by <code>Filters</code>.</p>
   */
  ReplicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessment[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTasksMessage {
  /**
   * @public
   * <p>Filters applied to replication tasks.</p>
   *          <p>Valid filter names: replication-task-arn | replication-task-id | migration-type |
   *          endpoint-arn | replication-instance-arn</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>An option to set to avoid returning information about settings. Use this to reduce
   *          overhead when setting information is too large. To use this option, choose
   *             <code>true</code>; otherwise, choose <code>false</code> (the default).</p>
   */
  WithoutSettings?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeReplicationTasksResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>A description of the replication tasks.</p>
   */
  ReplicationTasks?: ReplicationTask[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeSchemasMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeSchemasResponse {
  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The described schema.</p>
   */
  Schemas?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeTableStatisticsMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 500.</p>
   */
  MaxRecords?: number;

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Filters applied to table statistics.</p>
   *          <p>Valid filter names: schema-name | table-name | table-state</p>
   *          <p>A combination of filters creates an AND condition where each record matches all
   *          specified filters.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p></p>
 */
export interface DescribeTableStatisticsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * @public
   * <p>The table statistics.</p>
   */
  TableStatistics?: TableStatistics[];

  /**
   * @public
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

/**
 * @public
 * @enum
 */
export const AssessmentReportType = {
  CSV: "csv",
  PDF: "pdf",
} as const;

/**
 * @public
 */
export type AssessmentReportType = (typeof AssessmentReportType)[keyof typeof AssessmentReportType];

/**
 * @public
 */
export interface ExportMetadataModelAssessmentMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to assess.</p>
   */
  SelectionRules: string | undefined;

  /**
   * @public
   * <p>The name of the assessment file to create in your Amazon S3 bucket.</p>
   */
  FileName?: string;

  /**
   * @public
   * <p>The file format of the assessment file.</p>
   */
  AssessmentReportTypes?: AssessmentReportType[];
}

/**
 * @public
 * <p>Provides information about an exported metadata model assessment.</p>
 */
export interface ExportMetadataModelAssessmentResultEntry {
  /**
   * @public
   * <p>The object key for the object containing the exported metadata model assessment.</p>
   */
  S3ObjectKey?: string;

  /**
   * @public
   * <p>The URL for the object containing the exported metadata model assessment.</p>
   */
  ObjectURL?: string;
}

/**
 * @public
 */
export interface ExportMetadataModelAssessmentResponse {
  /**
   * @public
   * <p>The Amazon S3 details for an assessment exported in PDF format.</p>
   */
  PdfReport?: ExportMetadataModelAssessmentResultEntry;

  /**
   * @public
   * <p>The Amazon S3 details for an assessment exported in CSV format.</p>
   */
  CsvReport?: ExportMetadataModelAssessmentResultEntry;
}

/**
 * @public
 */
export interface ImportCertificateMessage {
  /**
   * @public
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter and
   *          must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or
   *          contain two consecutive hyphens.</p>
   */
  CertificateIdentifier: string | undefined;

  /**
   * @public
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * @public
   * <p>The location of an imported Oracle Wallet certificate for use with SSL. Provide the name of a <code>.sso</code> file
   *           using the <code>fileb://</code> prefix. You can't provide the certificate inline.</p>
   *          <p>Example: <code>filebase64("$\{path.root\}/rds-ca-2019-root.sso")</code>
   *          </p>
   */
  CertificateWallet?: Uint8Array;

  /**
   * @public
   * <p>The tags associated with the certificate.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * @public
   * <p>The certificate to be uploaded.</p>
   */
  Certificate?: Certificate;
}

/**
 * @public
 * <p>The certificate was not valid.</p>
 */
export class InvalidCertificateFault extends __BaseException {
  readonly name: "InvalidCertificateFault" = "InvalidCertificateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateFault, __BaseException>) {
    super({
      name: "InvalidCertificateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface ListTagsForResourceMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DMS resource to
   *          list tags for. This returns a list of keys (names of tags) created for the resource and
   *          their associated tag values.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>List of ARNs that identify multiple DMS resources that you want to list tags for. This
   *          returns a list of keys (tag names) and their associated tag values. It also returns each
   *          tag's associated <code>ResourceArn</code> value, which is the ARN of the resource for which
   *          each listed tag is created. </p>
   */
  ResourceArnList?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags for the resource.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface ModifyConversionConfigurationMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>The new conversion configuration.</p>
   */
  ConversionConfiguration: string | undefined;
}

/**
 * @public
 */
export interface ModifyConversionConfigurationResponse {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of  the modified configuration.</p>
   */
  MigrationProjectIdentifier?: string;
}

/**
 * @internal
 */
export const DocDbSettingsFilterSensitiveLog = (obj: DocDbSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GcpMySQLSettingsFilterSensitiveLog = (obj: GcpMySQLSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IBMDb2SettingsFilterSensitiveLog = (obj: IBMDb2Settings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KafkaSettingsFilterSensitiveLog = (obj: KafkaSettings): any => ({
  ...obj,
  ...(obj.SslClientKeyPassword && { SslClientKeyPassword: SENSITIVE_STRING }),
  ...(obj.SaslPassword && { SaslPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MicrosoftSQLServerSettingsFilterSensitiveLog = (obj: MicrosoftSQLServerSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MongoDbSettingsFilterSensitiveLog = (obj: MongoDbSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MySQLSettingsFilterSensitiveLog = (obj: MySQLSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OracleSettingsFilterSensitiveLog = (obj: OracleSettings): any => ({
  ...obj,
  ...(obj.AsmPassword && { AsmPassword: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.SecurityDbEncryption && { SecurityDbEncryption: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostgreSQLSettingsFilterSensitiveLog = (obj: PostgreSQLSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RedisSettingsFilterSensitiveLog = (obj: RedisSettings): any => ({
  ...obj,
  ...(obj.AuthPassword && { AuthPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RedshiftSettingsFilterSensitiveLog = (obj: RedshiftSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SybaseSettingsFilterSensitiveLog = (obj: SybaseSettings): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEndpointMessageFilterSensitiveLog = (obj: CreateEndpointMessage): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettingsFilterSensitiveLog(obj.MongoDbSettings) }),
  ...(obj.KafkaSettings && { KafkaSettings: KafkaSettingsFilterSensitiveLog(obj.KafkaSettings) }),
  ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettingsFilterSensitiveLog(obj.RedshiftSettings) }),
  ...(obj.PostgreSQLSettings && { PostgreSQLSettings: PostgreSQLSettingsFilterSensitiveLog(obj.PostgreSQLSettings) }),
  ...(obj.MySQLSettings && { MySQLSettings: MySQLSettingsFilterSensitiveLog(obj.MySQLSettings) }),
  ...(obj.OracleSettings && { OracleSettings: OracleSettingsFilterSensitiveLog(obj.OracleSettings) }),
  ...(obj.SybaseSettings && { SybaseSettings: SybaseSettingsFilterSensitiveLog(obj.SybaseSettings) }),
  ...(obj.MicrosoftSQLServerSettings && {
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsFilterSensitiveLog(obj.MicrosoftSQLServerSettings),
  }),
  ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2SettingsFilterSensitiveLog(obj.IBMDb2Settings) }),
  ...(obj.DocDbSettings && { DocDbSettings: DocDbSettingsFilterSensitiveLog(obj.DocDbSettings) }),
  ...(obj.RedisSettings && { RedisSettings: RedisSettingsFilterSensitiveLog(obj.RedisSettings) }),
  ...(obj.GcpMySQLSettings && { GcpMySQLSettings: GcpMySQLSettingsFilterSensitiveLog(obj.GcpMySQLSettings) }),
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
  ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettingsFilterSensitiveLog(obj.MongoDbSettings) }),
  ...(obj.KafkaSettings && { KafkaSettings: KafkaSettingsFilterSensitiveLog(obj.KafkaSettings) }),
  ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettingsFilterSensitiveLog(obj.RedshiftSettings) }),
  ...(obj.PostgreSQLSettings && { PostgreSQLSettings: PostgreSQLSettingsFilterSensitiveLog(obj.PostgreSQLSettings) }),
  ...(obj.MySQLSettings && { MySQLSettings: MySQLSettingsFilterSensitiveLog(obj.MySQLSettings) }),
  ...(obj.OracleSettings && { OracleSettings: OracleSettingsFilterSensitiveLog(obj.OracleSettings) }),
  ...(obj.SybaseSettings && { SybaseSettings: SybaseSettingsFilterSensitiveLog(obj.SybaseSettings) }),
  ...(obj.MicrosoftSQLServerSettings && {
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsFilterSensitiveLog(obj.MicrosoftSQLServerSettings),
  }),
  ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2SettingsFilterSensitiveLog(obj.IBMDb2Settings) }),
  ...(obj.DocDbSettings && { DocDbSettings: DocDbSettingsFilterSensitiveLog(obj.DocDbSettings) }),
  ...(obj.RedisSettings && { RedisSettings: RedisSettingsFilterSensitiveLog(obj.RedisSettings) }),
  ...(obj.GcpMySQLSettings && { GcpMySQLSettings: GcpMySQLSettingsFilterSensitiveLog(obj.GcpMySQLSettings) }),
});

/**
 * @internal
 */
export const CreateEndpointResponseFilterSensitiveLog = (obj: CreateEndpointResponse): any => ({
  ...obj,
  ...(obj.Endpoint && { Endpoint: EndpointFilterSensitiveLog(obj.Endpoint) }),
});

/**
 * @internal
 */
export const DeleteEndpointResponseFilterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
  ...obj,
  ...(obj.Endpoint && { Endpoint: EndpointFilterSensitiveLog(obj.Endpoint) }),
});

/**
 * @internal
 */
export const DescribeEndpointsResponseFilterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => EndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ImportCertificateMessageFilterSensitiveLog = (obj: ImportCertificateMessage): any => ({
  ...obj,
  ...(obj.CertificatePem && { CertificatePem: SENSITIVE_STRING }),
});
