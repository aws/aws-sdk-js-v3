// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBClusterAutomatedBackupMessage, DeleteDBClusterAutomatedBackupResult } from "../models/models_0";
import {
  de_DeleteDBClusterAutomatedBackupCommand,
  se_DeleteDBClusterAutomatedBackupCommand,
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
 * The input for {@link DeleteDBClusterAutomatedBackupCommand}.
 */
export interface DeleteDBClusterAutomatedBackupCommandInput extends DeleteDBClusterAutomatedBackupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterAutomatedBackupCommand}.
 */
export interface DeleteDBClusterAutomatedBackupCommandOutput
  extends DeleteDBClusterAutomatedBackupResult,
    __MetadataBearer {}

/**
 * <p>Deletes automated backups using the <code>DbClusterResourceId</code> value of the source DB cluster or the Amazon
 *             Resource Name (ARN) of the automated backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterAutomatedBackupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterAutomatedBackupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterAutomatedBackupMessage
 *   DbClusterResourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterAutomatedBackupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterAutomatedBackupResult
 * //   DBClusterAutomatedBackup: { // DBClusterAutomatedBackup
 * //     Engine: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     DBClusterAutomatedBackupsArn: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     RestoreWindow: { // RestoreWindow
 * //       EarliestTime: new Date("TIMESTAMP"),
 * //       LatestTime: new Date("TIMESTAMP"),
 * //     },
 * //     MasterUsername: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     StorageEncrypted: true || false,
 * //     AllocatedStorage: Number("int"),
 * //     EngineVersion: "STRING_VALUE",
 * //     DBClusterArn: "STRING_VALUE",
 * //     BackupRetentionPeriod: Number("int"),
 * //     EngineMode: "STRING_VALUE",
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     Port: Number("int"),
 * //     KmsKeyId: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterAutomatedBackupCommandInput - {@link DeleteDBClusterAutomatedBackupCommandInput}
 * @returns {@link DeleteDBClusterAutomatedBackupCommandOutput}
 * @see {@link DeleteDBClusterAutomatedBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterAutomatedBackupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB cluster was found.</p>
 *
 * @throws {@link InvalidDBClusterAutomatedBackupStateFault} (client fault)
 *  <p>The automated backup is in an invalid state.
 *             For example, this automated backup is associated with an active cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class DeleteDBClusterAutomatedBackupCommand extends $Command
  .classBuilder<
    DeleteDBClusterAutomatedBackupCommandInput,
    DeleteDBClusterAutomatedBackupCommandOutput,
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
  .s("AmazonRDSv19", "DeleteDBClusterAutomatedBackup", {})
  .n("RDSClient", "DeleteDBClusterAutomatedBackupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBClusterAutomatedBackupCommand)
  .de(de_DeleteDBClusterAutomatedBackupCommand)
  .build() {}
