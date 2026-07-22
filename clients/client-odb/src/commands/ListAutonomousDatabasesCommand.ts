// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutonomousDatabasesInput, ListAutonomousDatabasesOutput } from "../models/models_0";
import { ListAutonomousDatabases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutonomousDatabasesCommand}.
 */
export interface ListAutonomousDatabasesCommandInput extends ListAutonomousDatabasesInput {}
/**
 * @public
 *
 * The output of {@link ListAutonomousDatabasesCommand}.
 */
export interface ListAutonomousDatabasesCommandOutput extends ListAutonomousDatabasesOutput, __MetadataBearer {}

/**
 * <p>Returns information about the Autonomous Databases owned by your Amazon Web Services account in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListAutonomousDatabasesCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListAutonomousDatabasesCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListAutonomousDatabasesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutonomousDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutonomousDatabasesOutput
 * //   nextToken: "STRING_VALUE",
 * //   autonomousDatabases: [ // AutonomousDatabaseList // required
 * //     { // AutonomousDatabaseSummary
 * //       autonomousDatabaseId: "STRING_VALUE",
 * //       autonomousDatabaseArn: "STRING_VALUE",
 * //       ociResourceAnchorName: "STRING_VALUE",
 * //       percentProgress: Number("float"),
 * //       ocid: "STRING_VALUE",
 * //       ociUrl: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       dbName: "STRING_VALUE",
 * //       sourceId: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //       statusReason: "STRING_VALUE",
 * //       databaseType: "REGULAR" || "CLONE",
 * //       dbVersion: "STRING_VALUE",
 * //       dbWorkload: "OLTP" || "AJD" || "APEX" || "LH",
 * //       characterSet: "STRING_VALUE",
 * //       ncharacterSet: "STRING_VALUE",
 * //       databaseEdition: "STANDARD_EDITION" || "ENTERPRISE_EDITION",
 * //       licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 * //       openMode: "READ_ONLY" || "READ_WRITE",
 * //       permissionLevel: "RESTRICTED" || "UNRESTRICTED",
 * //       isMtlsConnectionRequired: true || false,
 * //       autonomousMaintenanceScheduleType: "EARLY" || "REGULAR",
 * //       netServicesArchitecture: "DEDICATED" || "SHARED",
 * //       availableUpgradeVersions: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       byolComputeCountLimit: Number("int"),
 * //       connectionStringDetails: { // AutonomousDatabaseConnectionStrings
 * //         allConnectionStrings: { // DatabaseConnectionStringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         dedicated: "STRING_VALUE",
 * //         high: "STRING_VALUE",
 * //         medium: "STRING_VALUE",
 * //         low: "STRING_VALUE",
 * //         profiles: [ // DatabaseConnectionStringProfileList
 * //           { // DatabaseConnectionStringProfile
 * //             consumerGroup: "STRING_VALUE",
 * //             displayName: "STRING_VALUE",
 * //             hostFormat: "STRING_VALUE",
 * //             isRegional: true || false,
 * //             protocol: "STRING_VALUE",
 * //             sessionMode: "STRING_VALUE",
 * //             syntaxFormat: "STRING_VALUE",
 * //             tlsAuthentication: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       serviceConsoleUrl: "STRING_VALUE",
 * //       sqlWebDeveloperUrl: "STRING_VALUE",
 * //       customerContacts: [ // CustomerContacts
 * //         { // CustomerContact
 * //           email: "STRING_VALUE",
 * //         },
 * //       ],
 * //       apexDetails: { // AutonomousDatabaseApex
 * //         apexVersion: "STRING_VALUE",
 * //         ordsVersion: "STRING_VALUE",
 * //       },
 * //       standbyDb: { // DatabaseStandbySummary
 * //         availabilityDomain: "STRING_VALUE",
 * //         lagTimeInSeconds: Number("int"),
 * //         status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //         statusReason: "STRING_VALUE",
 * //         maintenanceTargetComponent: "STRING_VALUE",
 * //         timeDataGuardRoleChanged: new Date("TIMESTAMP"),
 * //         timeDisasterRecoveryRoleChanged: new Date("TIMESTAMP"),
 * //         timeMaintenanceBegin: new Date("TIMESTAMP"),
 * //         timeMaintenanceEnd: new Date("TIMESTAMP"),
 * //       },
 * //       localStandbyDb: {
 * //         availabilityDomain: "STRING_VALUE",
 * //         lagTimeInSeconds: Number("int"),
 * //         status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //         statusReason: "STRING_VALUE",
 * //         maintenanceTargetComponent: "STRING_VALUE",
 * //         timeDataGuardRoleChanged: new Date("TIMESTAMP"),
 * //         timeDisasterRecoveryRoleChanged: new Date("TIMESTAMP"),
 * //         timeMaintenanceBegin: new Date("TIMESTAMP"),
 * //         timeMaintenanceEnd: new Date("TIMESTAMP"),
 * //       },
 * //       dataSafeStatus: "REGISTERING" || "REGISTERED" || "DEREGISTERING" || "NOT_REGISTERED" || "FAILED",
 * //       databaseManagementStatus: "ENABLING" || "ENABLED" || "DISABLING" || "NOT_ENABLED" || "FAILED_ENABLING" || "FAILED_DISABLING",
 * //       operationsInsightsStatus: "ENABLING" || "ENABLED" || "DISABLING" || "NOT_ENABLED" || "FAILED_ENABLING" || "FAILED_DISABLING",
 * //       availabilityZone: "STRING_VALUE",
 * //       availabilityZoneId: "STRING_VALUE",
 * //       maintenanceTargetComponent: "STRING_VALUE",
 * //       connectionUrls: { // AutonomousDatabaseConnectionUrls
 * //         apexUrl: "STRING_VALUE",
 * //         databaseTransformsUrl: "STRING_VALUE",
 * //         graphStudioUrl: "STRING_VALUE",
 * //         machineLearningNotebookUrl: "STRING_VALUE",
 * //         machineLearningUserManagementUrl: "STRING_VALUE",
 * //         mongoDbUrl: "STRING_VALUE",
 * //         ordsUrl: "STRING_VALUE",
 * //         spatialStudioUrl: "STRING_VALUE",
 * //         sqlDevWebUrl: "STRING_VALUE",
 * //       },
 * //       dbToolsDetails: [ // DatabaseToolList
 * //         { // DatabaseTool
 * //           isEnabled: true || false,
 * //           name: "STRING_VALUE",
 * //           computeCount: Number("double"),
 * //           maxIdleTimeInMinutes: Number("int"),
 * //         },
 * //       ],
 * //       scheduledOperations: [ // ScheduledOperationDetailsList
 * //         { // ScheduledOperationDetails
 * //           dayOfWeek: { // DayOfWeek
 * //             name: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //           },
 * //           scheduledStartTime: "STRING_VALUE",
 * //           scheduledStopTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //       resourcePoolLeaderId: "STRING_VALUE",
 * //       computeCount: Number("float"),
 * //       computeModel: "ECPU" || "OCPU",
 * //       cpuCoreCount: Number("int"),
 * //       memoryPerOracleComputeUnitInGBs: Number("int"),
 * //       provisionableCpus: [ // IntegerList
 * //         Number("int"),
 * //       ],
 * //       isAutoScalingEnabled: true || false,
 * //       dataStorageSizeInTBs: Number("double"),
 * //       dataStorageSizeInGBs: Number("int"),
 * //       usedDataStorageSizeInTBs: Number("double"),
 * //       usedDataStorageSizeInGBs: Number("int"),
 * //       actualUsedDataStorageSizeInTBs: Number("double"),
 * //       allocatedStorageSizeInTBs: Number("double"),
 * //       inMemoryAreaInGBs: Number("int"),
 * //       isAutoScalingForStorageEnabled: true || false,
 * //       odbNetworkId: "STRING_VALUE",
 * //       odbNetworkArn: "STRING_VALUE",
 * //       privateEndpoint: "STRING_VALUE",
 * //       privateEndpointIp: "STRING_VALUE",
 * //       privateEndpointLabel: "STRING_VALUE",
 * //       allowlistedIps: [
 * //         "STRING_VALUE",
 * //       ],
 * //       standbyAllowlistedIps: [
 * //         "STRING_VALUE",
 * //       ],
 * //       standbyAllowlistedIpsSource: "PRIMARY" || "SEPARATE" || "NOT_APPLICABLE",
 * //       isLocalDataGuardEnabled: true || false,
 * //       isRemoteDataGuardEnabled: true || false,
 * //       localDisasterRecoveryType: "ADG" || "BACKUP_BASED",
 * //       role: "PRIMARY" || "STANDBY" || "DISABLED_STANDBY" || "BACKUP_COPY" || "SNAPSHOT_STANDBY",
 * //       peerDbIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       failedDataRecoveryInSeconds: Number("int"),
 * //       localAdgAutoFailoverMaxDataLossLimit: Number("int"),
 * //       remoteDisasterRecoveryConfiguration: { // DisasterRecoveryConfiguration
 * //         disasterRecoveryType: "ADG" || "BACKUP_BASED",
 * //         isReplicateAutomaticBackups: true || false,
 * //         isSnapshotStandby: true || false,
 * //         timeSnapshotStandbyEnabledTill: new Date("TIMESTAMP"),
 * //       },
 * //       isRefreshableClone: true || false,
 * //       refreshableMode: "AUTOMATIC" || "MANUAL",
 * //       refreshableStatus: "REFRESHING" || "NOT_REFRESHING",
 * //       autoRefreshFrequencyInSeconds: Number("int"),
 * //       autoRefreshPointLagInSeconds: Number("int"),
 * //       isReconnectCloneEnabled: true || false,
 * //       cloneTableSpaceList: [
 * //         Number("int"),
 * //       ],
 * //       backupRetentionPeriodInDays: Number("int"),
 * //       longTermBackupSchedule: { // LongTermBackupSchedule
 * //         isDisabled: true || false,
 * //         repeatCadence: "ONE_TIME" || "WEEKLY" || "MONTHLY" || "YEARLY",
 * //         retentionPeriodInDays: Number("int"),
 * //         timeOfBackup: new Date("TIMESTAMP"),
 * //       },
 * //       isBackupRetentionLocked: true || false,
 * //       totalBackupStorageSizeInGBs: Number("double"),
 * //       resourcePoolSummary: { // ResourcePoolSummary
 * //         isDisabled: true || false,
 * //         poolSize: Number("int"),
 * //         poolStorageSizeInTBs: Number("int"),
 * //         availableStorageCapacityInTBs: Number("double"),
 * //         totalComputeCapacity: Number("int"),
 * //         availableComputeCapacity: Number("int"),
 * //       },
 * //       encryptionSummary: { // EncryptionSummary
 * //         encryptionKeyProvider: "ORACLE_MANAGED" || "AWS_KMS" || "OKV" || "OCI",
 * //         encryptionKeyConfiguration: { // EncryptionKeyConfiguration Union: only one key present
 * //           awsEncryptionKey: { // AwsEncryptionKeyConfiguration
 * //             iamRoleArn: "STRING_VALUE",
 * //             externalIdType: "database_ocid" || "compartment_ocid" || "tenant_ocid",
 * //             kmsKeyId: "STRING_VALUE",
 * //           },
 * //           ociEncryptionKey: { // OciEncryptionKeyConfiguration
 * //             kmsKeyId: "STRING_VALUE", // required
 * //             vaultId: "STRING_VALUE", // required
 * //           },
 * //           okvEncryptionKey: { // OkvEncryptionKeyConfiguration
 * //             certificateDirectoryName: "STRING_VALUE", // required
 * //             certificateId: "STRING_VALUE",
 * //             directoryName: "STRING_VALUE", // required
 * //             okvKmsKey: "STRING_VALUE", // required
 * //             okvUri: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       timeOfLastBackup: new Date("TIMESTAMP"),
 * //       timeMaintenanceBegin: new Date("TIMESTAMP"),
 * //       timeMaintenanceEnd: new Date("TIMESTAMP"),
 * //       timeLocalDataGuardEnabled: new Date("TIMESTAMP"),
 * //       timeDataGuardRoleChanged: new Date("TIMESTAMP"),
 * //       timeOfLastSwitchover: new Date("TIMESTAMP"),
 * //       timeOfLastFailover: new Date("TIMESTAMP"),
 * //       timeOfLastRefresh: new Date("TIMESTAMP"),
 * //       timeOfLastRefreshPoint: new Date("TIMESTAMP"),
 * //       timeOfNextRefresh: new Date("TIMESTAMP"),
 * //       timeOfAutoRefreshStart: new Date("TIMESTAMP"),
 * //       timeDeletionOfFreeAutonomousDatabase: new Date("TIMESTAMP"),
 * //       timeReclamationOfFreeAutonomousDatabase: new Date("TIMESTAMP"),
 * //       timeDisasterRecoveryRoleChanged: new Date("TIMESTAMP"),
 * //       timeUntilReconnectCloneEnabled: new Date("TIMESTAMP"),
 * //       nextLongTermBackupTimeStamp: new Date("TIMESTAMP"),
 * //       timeUndeleted: new Date("TIMESTAMP"),
 * //       adminPasswordSourceSummary: { // AdminPasswordSourceSummary
 * //         adminPasswordSource: "CUSTOMER_MANAGED_AWS_SECRET" || "API_REQUEST_PARAMETER",
 * //         adminPasswordSourceConfiguration: { // AdminPasswordSourceConfiguration Union: only one key present
 * //           customerManagedAwsSecret: { // CustomerManagedAwsSecretConfiguration
 * //             iamRoleArn: "STRING_VALUE",
 * //             secretId: "STRING_VALUE",
 * //             externalIdType: "database_ocid" || "compartment_ocid" || "tenant_ocid",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutonomousDatabasesCommandInput - {@link ListAutonomousDatabasesCommandInput}
 * @returns {@link ListAutonomousDatabasesCommandOutput}
 * @see {@link ListAutonomousDatabasesCommandInput} for command's `input` shape.
 * @see {@link ListAutonomousDatabasesCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListAutonomousDatabasesCommand extends command<ListAutonomousDatabasesCommandInput, ListAutonomousDatabasesCommandOutput>(
  _ep0,
  _mw0,
  "ListAutonomousDatabases",
  ListAutonomousDatabases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutonomousDatabasesInput;
      output: ListAutonomousDatabasesOutput;
    };
    sdk: {
      input: ListAutonomousDatabasesCommandInput;
      output: ListAutonomousDatabasesCommandOutput;
    };
  };
}
