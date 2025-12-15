// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StopDBInstanceAutomatedBackupsReplicationMessage,
  StopDBInstanceAutomatedBackupsReplicationResult,
} from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopDBInstanceAutomatedBackupsReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDBInstanceAutomatedBackupsReplicationCommand}.
 */
export interface StopDBInstanceAutomatedBackupsReplicationCommandInput
  extends StopDBInstanceAutomatedBackupsReplicationMessage {}
/**
 * @public
 *
 * The output of {@link StopDBInstanceAutomatedBackupsReplicationCommand}.
 */
export interface StopDBInstanceAutomatedBackupsReplicationCommandOutput
  extends StopDBInstanceAutomatedBackupsReplicationResult,
    __MetadataBearer {}

/**
 * <p>Stops automated backup replication for a DB instance.</p>
 *          <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // StopDBInstanceAutomatedBackupsReplicationMessage
 *   SourceDBInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopDBInstanceAutomatedBackupsReplicationResult
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
 * //     StorageThroughput: Number("int"),
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
 * //     MultiTenant: true || false,
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DedicatedLogVolume: true || false,
 * //     AdditionalStorageVolumes: [ // AdditionalStorageVolumesList
 * //       { // AdditionalStorageVolume
 * //         VolumeName: "STRING_VALUE", // required
 * //         AllocatedStorage: Number("int"),
 * //         IOPS: Number("int"),
 * //         MaxAllocatedStorage: Number("int"),
 * //         StorageThroughput: Number("int"),
 * //         StorageType: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StopDBInstanceAutomatedBackupsReplicationCommandInput - {@link StopDBInstanceAutomatedBackupsReplicationCommandInput}
 * @returns {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput}
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To stop replicating automated backups
 * ```javascript
 * // The following example ends replication of automated backups. Replicated backups are retained according to the set backup retention period.
 * const input = {
 *   SourceDBInstanceArn: "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db"
 * };
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBInstanceAutomatedBackup: {
 *     AllocatedStorage: 20,
 *     BackupRetentionPeriod: 7,
 *     DBInstanceArn: "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db",
 *     DBInstanceAutomatedBackupsArn: "arn:aws:rds:us-west-2:123456789012:auto-backup:ab-jkib2gfq5rv7replzadausbrktni2bn4example",
 *     DBInstanceIdentifier: "new-orcl-db",
 *     DbiResourceId: "db-JKIB2GFQ5RV7REPLZA4EXAMPLE",
 *     Encrypted: false,
 *     Engine: "oracle-se2",
 *     EngineVersion: "12.1.0.2.v21",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     InstanceCreateTime: "2020-12-04T15:28:31Z",
 *     LicenseModel: "bring-your-own-license",
 *     MasterUsername: "admin",
 *     OptionGroupName: "default:oracle-se2-12-1",
 *     Port: 1521,
 *     Region: "us-east-1",
 *     RestoreWindow: {
 *       EarliestTime: "2020-12-04T23:13:21.030Z",
 *       LatestTime: "2020-12-07T19:59:57Z"
 *     },
 *     Status: "replicating",
 *     StorageType: "gp2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopDBInstanceAutomatedBackupsReplicationCommand extends $Command
  .classBuilder<
    StopDBInstanceAutomatedBackupsReplicationCommandInput,
    StopDBInstanceAutomatedBackupsReplicationCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "StopDBInstanceAutomatedBackupsReplication", {})
  .n("RDSClient", "StopDBInstanceAutomatedBackupsReplicationCommand")
  .sc(StopDBInstanceAutomatedBackupsReplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDBInstanceAutomatedBackupsReplicationMessage;
      output: StopDBInstanceAutomatedBackupsReplicationResult;
    };
    sdk: {
      input: StopDBInstanceAutomatedBackupsReplicationCommandInput;
      output: StopDBInstanceAutomatedBackupsReplicationCommandOutput;
    };
  };
}
