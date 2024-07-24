// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBInstanceAutomatedBackupMessage, DeleteDBInstanceAutomatedBackupResult } from "../models/models_0";
import {
  de_DeleteDBInstanceAutomatedBackupCommand,
  se_DeleteDBInstanceAutomatedBackupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBInstanceAutomatedBackupCommand}.
 */
export interface DeleteDBInstanceAutomatedBackupCommandInput extends DeleteDBInstanceAutomatedBackupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBInstanceAutomatedBackupCommand}.
 */
export interface DeleteDBInstanceAutomatedBackupCommandOutput
  extends DeleteDBInstanceAutomatedBackupResult,
    __MetadataBearer {}

/**
 * <p>Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBInstanceAutomatedBackupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBInstanceAutomatedBackupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBInstanceAutomatedBackupMessage
 *   DbiResourceId: "STRING_VALUE",
 *   DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * };
 * const command = new DeleteDBInstanceAutomatedBackupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBInstanceAutomatedBackupResult
 * //   DBInstanceAutomatedBackup: { // DBInstanceAutomatedBackup
 * //     DBInstanceArn: "STRING_VALUE",
 * //     DbiResourceId: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     RestoreWindow: { // RestoreWindow
 * //       EarliestTime: new Date("TIMESTAMP"),
 * //       LatestTime: new Date("TIMESTAMP"),
 * //     },
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     OptionGroupName: "STRING_VALUE",
 * //     TdeCredentialArn: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     StorageType: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     BackupRetentionPeriod: Number("int"),
 * //     DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //     DBInstanceAutomatedBackupsReplications: [ // DBInstanceAutomatedBackupsReplicationList
 * //       { // DBInstanceAutomatedBackupsReplication
 * //         DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BackupTarget: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     DedicatedLogVolume: true || false,
 * //     MultiTenant: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBInstanceAutomatedBackupCommandInput - {@link DeleteDBInstanceAutomatedBackupCommandInput}
 * @returns {@link DeleteDBInstanceAutomatedBackupCommandOutput}
 * @see {@link DeleteDBInstanceAutomatedBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceAutomatedBackupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB instance was found.</p>
 *
 * @throws {@link InvalidDBInstanceAutomatedBackupStateFault} (client fault)
 *  <p>The automated backup is in an invalid state.
 *             For example, this automated backup is associated with an active instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class DeleteDBInstanceAutomatedBackupCommand extends $Command
  .classBuilder<
    DeleteDBInstanceAutomatedBackupCommandInput,
    DeleteDBInstanceAutomatedBackupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeleteDBInstanceAutomatedBackup", {})
  .n("RDSClient", "DeleteDBInstanceAutomatedBackupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBInstanceAutomatedBackupCommand)
  .de(de_DeleteDBInstanceAutomatedBackupCommand)
  .build() {}
