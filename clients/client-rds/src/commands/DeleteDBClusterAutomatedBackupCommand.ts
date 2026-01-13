// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDBClusterAutomatedBackupMessage, DeleteDBClusterAutomatedBackupResult } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBClusterAutomatedBackup$ } from "../schemas/schemas_0";

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
export interface DeleteDBClusterAutomatedBackupCommandOutput extends DeleteDBClusterAutomatedBackupResult, __MetadataBearer {}

/**
 * <p>Deletes automated backups using the <code>DbClusterResourceId</code> value of the source DB cluster or the Amazon
 *             Resource Name (ARN) of the automated backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterAutomatedBackupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterAutomatedBackupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 * //     StorageThroughput: Number("int"),
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteDBClusterAutomatedBackup", {})
  .n("RDSClient", "DeleteDBClusterAutomatedBackupCommand")
  .sc(DeleteDBClusterAutomatedBackup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBClusterAutomatedBackupMessage;
      output: DeleteDBClusterAutomatedBackupResult;
    };
    sdk: {
      input: DeleteDBClusterAutomatedBackupCommandInput;
      output: DeleteDBClusterAutomatedBackupCommandOutput;
    };
  };
}
