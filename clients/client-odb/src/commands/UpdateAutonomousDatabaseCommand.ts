// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAutonomousDatabaseInput, UpdateAutonomousDatabaseOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { UpdateAutonomousDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutonomousDatabaseCommand}.
 */
export interface UpdateAutonomousDatabaseCommandInput extends UpdateAutonomousDatabaseInput {}
/**
 * @public
 *
 * The output of {@link UpdateAutonomousDatabaseCommand}.
 */
export interface UpdateAutonomousDatabaseCommandOutput extends UpdateAutonomousDatabaseOutput, __MetadataBearer {}

/**
 * <p>Updates the properties of an Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateAutonomousDatabaseCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateAutonomousDatabaseCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateAutonomousDatabaseInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 *   adminPassword: "STRING_VALUE",
 *   computeCount: Number("double"),
 *   cpuCoreCount: Number("int"),
 *   dataStorageSizeInTBs: Number("int"),
 *   dataStorageSizeInGBs: Number("int"),
 *   displayName: "STRING_VALUE",
 *   dbName: "STRING_VALUE",
 *   dbVersion: "STRING_VALUE",
 *   dbWorkload: "OLTP" || "AJD" || "APEX" || "LH",
 *   dbToolsDetails: [ // DatabaseToolList
 *     { // DatabaseTool
 *       isEnabled: true || false,
 *       name: "STRING_VALUE",
 *       computeCount: Number("double"),
 *       maxIdleTimeInMinutes: Number("int"),
 *     },
 *   ],
 *   databaseEdition: "STANDARD_EDITION" || "ENTERPRISE_EDITION",
 *   licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 *   isAutoScalingEnabled: true || false,
 *   isAutoScalingForStorageEnabled: true || false,
 *   isBackupRetentionLocked: true || false,
 *   isLocalDataGuardEnabled: true || false,
 *   isMtlsConnectionRequired: true || false,
 *   isRefreshableClone: true || false,
 *   isDisconnectPeer: true || false,
 *   backupRetentionPeriodInDays: Number("int"),
 *   byolComputeCountLimit: Number("double"),
 *   localAdgAutoFailoverMaxDataLossLimit: Number("int"),
 *   autonomousMaintenanceScheduleType: "EARLY" || "REGULAR",
 *   customerContactsToSendToOCI: [ // CustomerContacts
 *     { // CustomerContact
 *       email: "STRING_VALUE",
 *     },
 *   ],
 *   scheduledOperations: [ // ScheduledOperationDetailsList
 *     { // ScheduledOperationDetails
 *       dayOfWeek: { // DayOfWeek
 *         name: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 *       },
 *       scheduledStartTime: "STRING_VALUE",
 *       scheduledStopTime: "STRING_VALUE",
 *     },
 *   ],
 *   longTermBackupSchedule: { // LongTermBackupSchedule
 *     isDisabled: true || false,
 *     repeatCadence: "ONE_TIME" || "WEEKLY" || "MONTHLY" || "YEARLY",
 *     retentionPeriodInDays: Number("int"),
 *     timeOfBackup: new Date("TIMESTAMP"),
 *   },
 *   openMode: "READ_ONLY" || "READ_WRITE",
 *   permissionLevel: "RESTRICTED" || "UNRESTRICTED",
 *   refreshableMode: "AUTOMATIC" || "MANUAL",
 *   privateEndpointIp: "STRING_VALUE",
 *   privateEndpointLabel: "STRING_VALUE",
 *   peerDbId: "STRING_VALUE",
 *   resourcePoolLeaderId: "STRING_VALUE",
 *   resourcePoolSummary: { // ResourcePoolSummary
 *     isDisabled: true || false,
 *     poolSize: Number("int"),
 *     poolStorageSizeInTBs: Number("int"),
 *     availableStorageCapacityInTBs: Number("double"),
 *     totalComputeCapacity: Number("int"),
 *     availableComputeCapacity: Number("int"),
 *   },
 *   standbyAllowlistedIpsSource: "PRIMARY" || "SEPARATE" || "NOT_APPLICABLE",
 *   standbyAllowlistedIps: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   allowlistedIps: [
 *     "STRING_VALUE",
 *   ],
 *   autoRefreshFrequencyInSeconds: Number("int"),
 *   autoRefreshPointLagInSeconds: Number("int"),
 *   timeOfAutoRefreshStart: new Date("TIMESTAMP"),
 *   encryptionKeyProvider: "ORACLE_MANAGED" || "AWS_KMS",
 *   encryptionKeyConfiguration: { // EncryptionKeyConfigurationInput Union: only one key present
 *     awsEncryptionKey: { // AwsEncryptionKeyConfigurationInput
 *       iamRoleArn: "STRING_VALUE",
 *       externalIdType: "database_ocid" || "compartment_ocid" || "tenant_ocid",
 *       kmsKeyId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateAutonomousDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutonomousDatabaseOutput
 * //   autonomousDatabaseId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAutonomousDatabaseCommandInput - {@link UpdateAutonomousDatabaseCommandInput}
 * @returns {@link UpdateAutonomousDatabaseCommandOutput}
 * @see {@link UpdateAutonomousDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateAutonomousDatabaseCommandOutput} for command's `response` shape.
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
export class UpdateAutonomousDatabaseCommand extends $Command
  .classBuilder<
    UpdateAutonomousDatabaseCommandInput,
    UpdateAutonomousDatabaseCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "UpdateAutonomousDatabase", {})
  .n("OdbClient", "UpdateAutonomousDatabaseCommand")
  .sc(UpdateAutonomousDatabase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutonomousDatabaseInput;
      output: UpdateAutonomousDatabaseOutput;
    };
    sdk: {
      input: UpdateAutonomousDatabaseCommandInput;
      output: UpdateAutonomousDatabaseCommandOutput;
    };
  };
}
