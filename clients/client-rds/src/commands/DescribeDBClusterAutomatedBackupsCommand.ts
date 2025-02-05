// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterAutomatedBackupMessage, DescribeDBClusterAutomatedBackupsMessage } from "../models/models_1";
import {
  de_DescribeDBClusterAutomatedBackupsCommand,
  se_DescribeDBClusterAutomatedBackupsCommand,
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
 * The input for {@link DescribeDBClusterAutomatedBackupsCommand}.
 */
export interface DescribeDBClusterAutomatedBackupsCommandInput extends DescribeDBClusterAutomatedBackupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterAutomatedBackupsCommand}.
 */
export interface DescribeDBClusterAutomatedBackupsCommandOutput
  extends DBClusterAutomatedBackupMessage,
    __MetadataBearer {}

/**
 * <p>Displays backups for both current and deleted DB clusters. For example, use this operation to find details
 *             about automated backups for previously deleted clusters. Current clusters are returned for both the
 *             <code>DescribeDBClusterAutomatedBackups</code> and <code>DescribeDBClusters</code> operations.</p>
 *          <p>All parameters are optional.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterAutomatedBackupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterAutomatedBackupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterAutomatedBackupsMessage
 *   DbClusterResourceId: "STRING_VALUE",
 *   DBClusterIdentifier: "STRING_VALUE",
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
 * };
 * const command = new DescribeDBClusterAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterAutomatedBackupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterAutomatedBackups: [ // DBClusterAutomatedBackupList
 * //     { // DBClusterAutomatedBackup
 * //       Engine: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       DBClusterAutomatedBackupsArn: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       RestoreWindow: { // RestoreWindow
 * //         EarliestTime: new Date("TIMESTAMP"),
 * //         LatestTime: new Date("TIMESTAMP"),
 * //       },
 * //       MasterUsername: "STRING_VALUE",
 * //       DbClusterResourceId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       StorageEncrypted: true || false,
 * //       AllocatedStorage: Number("int"),
 * //       EngineVersion: "STRING_VALUE",
 * //       DBClusterArn: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       EngineMode: "STRING_VALUE",
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       Port: Number("int"),
 * //       KmsKeyId: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //       StorageThroughput: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterAutomatedBackupsCommandInput - {@link DescribeDBClusterAutomatedBackupsCommandInput}
 * @returns {@link DescribeDBClusterAutomatedBackupsCommandOutput}
 * @see {@link DescribeDBClusterAutomatedBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterAutomatedBackupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB cluster was found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class DescribeDBClusterAutomatedBackupsCommand extends $Command
  .classBuilder<
    DescribeDBClusterAutomatedBackupsCommandInput,
    DescribeDBClusterAutomatedBackupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeDBClusterAutomatedBackups", {})
  .n("RDSClient", "DescribeDBClusterAutomatedBackupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterAutomatedBackupsCommand)
  .de(de_DescribeDBClusterAutomatedBackupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClusterAutomatedBackupsMessage;
      output: DBClusterAutomatedBackupMessage;
    };
    sdk: {
      input: DescribeDBClusterAutomatedBackupsCommandInput;
      output: DescribeDBClusterAutomatedBackupsCommandOutput;
    };
  };
}
