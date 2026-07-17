// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAutonomousDatabaseInput, CreateAutonomousDatabaseOutput } from "../models/models_0";
import { CreateAutonomousDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAutonomousDatabaseCommand}.
 */
export interface CreateAutonomousDatabaseCommandInput extends CreateAutonomousDatabaseInput {}
/**
 * @public
 *
 * The output of {@link CreateAutonomousDatabaseCommand}.
 */
export interface CreateAutonomousDatabaseCommandOutput extends CreateAutonomousDatabaseOutput, __MetadataBearer {}

/**
 * <p>Creates a new Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateAutonomousDatabaseCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateAutonomousDatabaseCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateAutonomousDatabaseInput
 *   odbNetworkId: "STRING_VALUE",
 *   displayName: "STRING_VALUE",
 *   dbName: "STRING_VALUE",
 *   adminPassword: "STRING_VALUE",
 *   computeCount: Number("double"),
 *   dataStorageSizeInTBs: Number("int"),
 *   dataStorageSizeInGBs: Number("int"),
 *   dbWorkload: "OLTP" || "AJD" || "APEX" || "LH",
 *   isAutoScalingEnabled: true || false,
 *   isAutoScalingForStorageEnabled: true || false,
 *   licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 *   characterSet: "STRING_VALUE",
 *   ncharacterSet: "STRING_VALUE",
 *   dbVersion: "STRING_VALUE",
 *   databaseEdition: "STANDARD_EDITION" || "ENTERPRISE_EDITION",
 *   standbyAllowlistedIpsSource: "PRIMARY" || "SEPARATE" || "NOT_APPLICABLE",
 *   autonomousMaintenanceScheduleType: "EARLY" || "REGULAR",
 *   backupRetentionPeriodInDays: Number("int"),
 *   byolComputeCountLimit: Number("double"),
 *   cpuCoreCount: Number("int"),
 *   customerContactsToSendToOCI: [ // CustomerContacts
 *     { // CustomerContact
 *       email: "STRING_VALUE",
 *     },
 *   ],
 *   privateEndpointIp: "STRING_VALUE",
 *   privateEndpointLabel: "STRING_VALUE",
 *   resourcePoolLeaderId: "STRING_VALUE",
 *   resourcePoolSummary: { // ResourcePoolSummary
 *     isDisabled: true || false,
 *     poolSize: Number("int"),
 *     poolStorageSizeInTBs: Number("int"),
 *     availableStorageCapacityInTBs: Number("double"),
 *     totalComputeCapacity: Number("int"),
 *     availableComputeCapacity: Number("int"),
 *   },
 *   scheduledOperations: [ // ScheduledOperationDetailsList
 *     { // ScheduledOperationDetails
 *       dayOfWeek: { // DayOfWeek
 *         name: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 *       },
 *       scheduledStartTime: "STRING_VALUE",
 *       scheduledStopTime: "STRING_VALUE",
 *     },
 *   ],
 *   standbyAllowlistedIps: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   allowlistedIps: [
 *     "STRING_VALUE",
 *   ],
 *   transportableTablespace: { // TransportableTablespace
 *     ttsBundleUrl: "STRING_VALUE",
 *   },
 *   isBackupRetentionLocked: true || false,
 *   isLocalDataGuardEnabled: true || false,
 *   isMtlsConnectionRequired: true || false,
 *   dbToolsDetails: [ // DatabaseToolList
 *     { // DatabaseTool
 *       isEnabled: true || false,
 *       name: "STRING_VALUE",
 *       computeCount: Number("double"),
 *       maxIdleTimeInMinutes: Number("int"),
 *     },
 *   ],
 *   source: "NONE" || "DATABASE" || "BACKUP_FROM_ID" || "BACKUP_FROM_TIMESTAMP" || "CROSS_REGION_DATAGUARD" || "CROSS_REGION_DISASTER_RECOVERY" || "CLONE_TO_REFRESHABLE",
 *   sourceConfiguration: { // SourceConfiguration Union: only one key present
 *     databaseClone: { // DatabaseCloneConfiguration
 *       sourceAutonomousDatabaseId: "STRING_VALUE", // required
 *       cloneType: "FULL" || "METADATA" || "PARTIAL", // required
 *     },
 *     restoreFromBackup: { // RestoreFromBackupConfiguration
 *       autonomousDatabaseBackupId: "STRING_VALUE", // required
 *       cloneType: "FULL" || "METADATA" || "PARTIAL", // required
 *       cloneTableSpaceList: [ // IntegerList
 *         Number("int"),
 *       ],
 *     },
 *     pointInTimeRestore: { // PointInTimeRestoreConfiguration
 *       sourceAutonomousDatabaseId: "STRING_VALUE", // required
 *       cloneType: "FULL" || "METADATA" || "PARTIAL", // required
 *       timestamp: new Date("TIMESTAMP"),
 *       useLatestAvailableBackupTimestamp: true || false,
 *       cloneTableSpaceList: [
 *         Number("int"),
 *       ],
 *     },
 *     crossRegionDataGuard: { // CrossRegionDataGuardConfiguration
 *       sourceAutonomousDatabaseArn: "STRING_VALUE", // required
 *     },
 *     crossRegionDisasterRecovery: { // CrossRegionDisasterRecoveryConfiguration
 *       sourceAutonomousDatabaseArn: "STRING_VALUE", // required
 *       remoteDisasterRecoveryType: "ADG" || "BACKUP_BASED", // required
 *       isReplicateAutomaticBackups: true || false,
 *     },
 *     cloneToRefreshable: { // CloneToRefreshableConfiguration
 *       sourceAutonomousDatabaseId: "STRING_VALUE", // required
 *       refreshableMode: "AUTOMATIC" || "MANUAL",
 *       autoRefreshFrequencyInSeconds: Number("int"),
 *       autoRefreshPointLagInSeconds: Number("int"),
 *       timeOfAutoRefreshStart: new Date("TIMESTAMP"),
 *       openMode: "READ_ONLY" || "READ_WRITE",
 *       cloneType: "FULL" || "METADATA" || "PARTIAL",
 *     },
 *   },
 *   encryptionKeyProvider: "ORACLE_MANAGED" || "AWS_KMS",
 *   encryptionKeyConfiguration: { // EncryptionKeyConfigurationInput Union: only one key present
 *     awsEncryptionKey: { // AwsEncryptionKeyConfigurationInput
 *       iamRoleArn: "STRING_VALUE",
 *       externalIdType: "database_ocid" || "compartment_ocid" || "tenant_ocid",
 *       kmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   adminPasswordSource: "CUSTOMER_MANAGED_AWS_SECRET" || "API_REQUEST_PARAMETER",
 *   adminPasswordSourceConfiguration: { // AdminPasswordSourceConfigurationInput Union: only one key present
 *     customerManagedAwsSecret: { // CustomerManagedAwsSecretConfigurationInput
 *       secretId: "STRING_VALUE",
 *       iamRoleArn: "STRING_VALUE",
 *       externalIdType: "database_ocid" || "compartment_ocid" || "tenant_ocid",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAutonomousDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutonomousDatabaseOutput
 * //   autonomousDatabaseId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAutonomousDatabaseCommandInput - {@link CreateAutonomousDatabaseCommandInput}
 * @returns {@link CreateAutonomousDatabaseCommandOutput}
 * @see {@link CreateAutonomousDatabaseCommandInput} for command's `input` shape.
 * @see {@link CreateAutonomousDatabaseCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
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
export class CreateAutonomousDatabaseCommand extends command<CreateAutonomousDatabaseCommandInput, CreateAutonomousDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateAutonomousDatabase",
  CreateAutonomousDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutonomousDatabaseInput;
      output: CreateAutonomousDatabaseOutput;
    };
    sdk: {
      input: CreateAutonomousDatabaseCommandInput;
      output: CreateAutonomousDatabaseCommandOutput;
    };
  };
}
