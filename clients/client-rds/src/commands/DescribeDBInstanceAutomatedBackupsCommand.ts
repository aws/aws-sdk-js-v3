// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBInstanceAutomatedBackupMessage, DescribeDBInstanceAutomatedBackupsMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBInstanceAutomatedBackups } from "../schemas/schemas_0";

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
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 * //       StorageThroughput: Number("int"),
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
 * //       MultiTenant: true || false,
 * //       AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //       DedicatedLogVolume: true || false,
 * //       AdditionalStorageVolumes: [ // AdditionalStorageVolumesList
 * //         { // AdditionalStorageVolume
 * //           VolumeName: "STRING_VALUE", // required
 * //           AllocatedStorage: Number("int"),
 * //           IOPS: Number("int"),
 * //           MaxAllocatedStorage: Number("int"),
 * //           StorageThroughput: Number("int"),
 * //           StorageType: "STRING_VALUE",
 * //         },
 * //       ],
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
 *
 * @example To describe the automated backups for a DB instance
 * ```javascript
 * // The following example displays details about the automated backups for the specified DB instance. The details include replicated automated backups in other AWS Regions.
 * const input = {
 *   DBInstanceIdentifier: "new-orcl-db"
 * };
 * const command = new DescribeDBInstanceAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBInstanceAutomatedBackups: [
 *     {
 *       AllocatedStorage: 20,
 *       BackupRetentionPeriod: 14,
 *       DBInstanceArn: "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db",
 *       DBInstanceAutomatedBackupsArn: "arn:aws:rds:us-west-2:123456789012:auto-backup:ab-jkib2gfq5rv7replzadausbrktni2bn4example",
 *       DBInstanceIdentifier: "new-orcl-db",
 *       DbiResourceId: "db-JKIB2GFQ5RV7REPLZA4EXAMPLE",
 *       Encrypted: false,
 *       Engine: "oracle-se2",
 *       EngineVersion: "12.1.0.2.v21",
 *       IAMDatabaseAuthenticationEnabled: false,
 *       InstanceCreateTime: "2020-12-04T15:28:31Z",
 *       LicenseModel: "bring-your-own-license",
 *       MasterUsername: "admin",
 *       OptionGroupName: "default:oracle-se2-12-1",
 *       Port: 1521,
 *       Region: "us-east-1",
 *       RestoreWindow: {
 *         EarliestTime: "2020-12-07T21:05:20.939Z",
 *         LatestTime: "2020-12-07T21:05:20.939Z"
 *       },
 *       Status: "replicating",
 *       StorageType: "gp2"
 *     }
 *   ]
 * }
 * *\/
 * ```
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBInstanceAutomatedBackups", {})
  .n("RDSClient", "DescribeDBInstanceAutomatedBackupsCommand")
  .sc(DescribeDBInstanceAutomatedBackups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBInstanceAutomatedBackupsMessage;
      output: DBInstanceAutomatedBackupMessage;
    };
    sdk: {
      input: DescribeDBInstanceAutomatedBackupsCommandInput;
      output: DescribeDBInstanceAutomatedBackupsCommandOutput;
    };
  };
}
