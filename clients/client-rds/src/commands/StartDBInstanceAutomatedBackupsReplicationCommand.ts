// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartDBInstanceAutomatedBackupsReplicationMessage,
  StartDBInstanceAutomatedBackupsReplicationResult,
} from "../models/models_1";
import {
  de_StartDBInstanceAutomatedBackupsReplicationCommand,
  se_StartDBInstanceAutomatedBackupsReplicationCommand,
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
 * The input for {@link StartDBInstanceAutomatedBackupsReplicationCommand}.
 */
export interface StartDBInstanceAutomatedBackupsReplicationCommandInput
  extends StartDBInstanceAutomatedBackupsReplicationMessage {}
/**
 * @public
 *
 * The output of {@link StartDBInstanceAutomatedBackupsReplicationCommand}.
 */
export interface StartDBInstanceAutomatedBackupsReplicationCommandOutput
  extends StartDBInstanceAutomatedBackupsReplicationResult,
    __MetadataBearer {}

/**
 * <p>Enables replication of automated backups to a different Amazon Web Services Region.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // StartDBInstanceAutomatedBackupsReplicationMessage
 *   SourceDBInstanceArn: "STRING_VALUE", // required
 *   BackupRetentionPeriod: Number("int"),
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
 * };
 * const command = new StartDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartDBInstanceAutomatedBackupsReplicationResult
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
 * @param StartDBInstanceAutomatedBackupsReplicationCommandInput - {@link StartDBInstanceAutomatedBackupsReplicationCommandInput}
 * @returns {@link StartDBInstanceAutomatedBackupsReplicationCommandOutput}
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceAutomatedBackupQuotaExceededFault} (client fault)
 *  <p>The quota for retained automated backups was exceeded. This prevents you
 *             from retaining any additional automated backups. The retained automated backups
 *             quota is the same as your DB instance quota.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link StorageTypeNotSupportedFault} (client fault)
 *  <p>The specified <code>StorageType</code> can't be associated with the DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To enable cross-Region automated backups
 * ```javascript
 * // The following example replicates automated backups from a DB instance in the US East (N. Virginia) Region. The backup retention period is 14 days.
 * const input = {
 *   "BackupRetentionPeriod": 14,
 *   "SourceDBInstanceArn": "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db"
 * };
 * const command = new StartDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstanceAutomatedBackup": {
 *     "AllocatedStorage": 20,
 *     "BackupRetentionPeriod": 14,
 *     "DBInstanceArn": "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db",
 *     "DBInstanceAutomatedBackupsArn": "arn:aws:rds:us-west-2:123456789012:auto-backup:ab-jkib2gfq5rv7replzadausbrktni2bn4example",
 *     "DBInstanceIdentifier": "new-orcl-db",
 *     "DbiResourceId": "db-JKIB2GFQ5RV7REPLZA4EXAMPLE",
 *     "Encrypted": false,
 *     "Engine": "oracle-se2",
 *     "EngineVersion": "12.1.0.2.v21",
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "InstanceCreateTime": "2020-12-04T15:28:31Z",
 *     "LicenseModel": "bring-your-own-license",
 *     "MasterUsername": "admin",
 *     "OptionGroupName": "default:oracle-se2-12-1",
 *     "Port": 1521,
 *     "Region": "us-east-1",
 *     "RestoreWindow": {},
 *     "Status": "pending",
 *     "StorageType": "gp2"
 *   }
 * }
 * *\/
 * // example id: to-enable-cross-region-automated-backups-1680033438352
 * ```
 *
 */
export class StartDBInstanceAutomatedBackupsReplicationCommand extends $Command
  .classBuilder<
    StartDBInstanceAutomatedBackupsReplicationCommandInput,
    StartDBInstanceAutomatedBackupsReplicationCommandOutput,
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
      getCrossRegionPresignedUrlPlugin(config),
    ];
  })
  .s("AmazonRDSv19", "StartDBInstanceAutomatedBackupsReplication", {})
  .n("RDSClient", "StartDBInstanceAutomatedBackupsReplicationCommand")
  .f(void 0, void 0)
  .ser(se_StartDBInstanceAutomatedBackupsReplicationCommand)
  .de(de_StartDBInstanceAutomatedBackupsReplicationCommand)
  .build() {}
