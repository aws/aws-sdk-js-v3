// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBInstanceAutomatedBackupMessage, DescribeDBInstanceAutomatedBackupsMessage } from "../models/models_1";
import {
  de_DescribeDBInstanceAutomatedBackupsCommand,
  se_DescribeDBInstanceAutomatedBackupsCommand,
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
 * The input for {@link DescribeDBInstanceAutomatedBackupsCommand}.
 */
export interface DescribeDBInstanceAutomatedBackupsCommandInput extends DescribeDBInstanceAutomatedBackupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBInstanceAutomatedBackupsCommand}.
 */
export interface DescribeDBInstanceAutomatedBackupsCommandOutput
  extends DBInstanceAutomatedBackupMessage,
    __MetadataBearer {}

/**
 * <p>Displays backups for both current and deleted
 *             instances. For example, use this operation to
 *             find details about automated backups for previously deleted instances. Current instances
 *             with retention periods greater than zero (0) are returned for both the
 *             <code>DescribeDBInstanceAutomatedBackups</code> and
 *             <code>DescribeDBInstances</code> operations.</p>
 *          <p>All parameters are optional.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBInstanceAutomatedBackupsMessage
 *   DbiResourceId: "STRING_VALUE",
 *   DBInstanceIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * };
 * const command = new DescribeDBInstanceAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DBInstanceAutomatedBackupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBInstanceAutomatedBackups: [ // DBInstanceAutomatedBackupList
 * //     { // DBInstanceAutomatedBackup
 * //       DBInstanceArn: "STRING_VALUE",
 * //       DbiResourceId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       RestoreWindow: { // RestoreWindow
 * //         EarliestTime: new Date("TIMESTAMP"),
 * //         LatestTime: new Date("TIMESTAMP"),
 * //       },
 * //       AllocatedStorage: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       OptionGroupName: "STRING_VALUE",
 * //       TdeCredentialArn: "STRING_VALUE",
 * //       Encrypted: true || false,
 * //       StorageType: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       BackupRetentionPeriod: Number("int"),
 * //       DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //       DBInstanceAutomatedBackupsReplications: [ // DBInstanceAutomatedBackupsReplicationList
 * //         { // DBInstanceAutomatedBackupsReplication
 * //           DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       BackupTarget: "STRING_VALUE",
 * //       StorageThroughput: Number("int"),
 * //       AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //       DedicatedLogVolume: true || false,
 * //       MultiTenant: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBInstanceAutomatedBackupsCommandInput - {@link DescribeDBInstanceAutomatedBackupsCommandInput}
 * @returns {@link DescribeDBInstanceAutomatedBackupsCommandOutput}
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB instance was found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class DescribeDBInstanceAutomatedBackupsCommand extends $Command
  .classBuilder<
    DescribeDBInstanceAutomatedBackupsCommandInput,
    DescribeDBInstanceAutomatedBackupsCommandOutput,
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
  .s("AmazonRDSv19", "DescribeDBInstanceAutomatedBackups", {})
  .n("RDSClient", "DescribeDBInstanceAutomatedBackupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBInstanceAutomatedBackupsCommand)
  .de(de_DescribeDBInstanceAutomatedBackupsCommand)
  .build() {}
