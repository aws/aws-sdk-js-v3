// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyDBSnapshotMessage, ModifyDBSnapshotResult } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBSnapshotCommand}.
 */
export interface ModifyDBSnapshotCommandInput extends ModifyDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBSnapshotCommand}.
 */
export interface ModifyDBSnapshotCommandOutput extends ModifyDBSnapshotResult, __MetadataBearer {}

/**
 * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted
 *             or unencrypted, but not shared or public.
 *
 *     </p>
 *          <p>Amazon RDS supports upgrading DB snapshots for MariaDB, MySQL, PostgreSQL, and Oracle. This operation
 *           doesn't apply to RDS Custom or RDS for Db2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyDBSnapshotMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 * };
 * const command = new ModifyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBSnapshotResult
 * //   DBSnapshot: { // DBSnapshot
 * //     DBSnapshotIdentifier: "STRING_VALUE",
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     StorageThroughput: Number("int"),
 * //     OptionGroupName: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     SourceRegion: "STRING_VALUE",
 * //     SourceDBSnapshotIdentifier: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     TdeCredentialArn: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBSnapshotArn: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     ProcessorFeatures: [ // ProcessorFeatureList
 * //       { // ProcessorFeature
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DbiResourceId: "STRING_VALUE",
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SnapshotTarget: "STRING_VALUE",
 * //     OriginalSnapshotCreateTime: new Date("TIMESTAMP"),
 * //     SnapshotDatabaseTime: new Date("TIMESTAMP"),
 * //     DBSystemId: "STRING_VALUE",
 * //     MultiTenant: true || false,
 * //     DedicatedLogVolume: true || false,
 * //     SnapshotAvailabilityZone: "STRING_VALUE",
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
 * @param ModifyDBSnapshotCommandInput - {@link ModifyDBSnapshotCommandInput}
 * @returns {@link ModifyDBSnapshotCommandOutput}
 * @see {@link ModifyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot doesn't allow deletion.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To modify a DB snapshot
 * ```javascript
 * // The following example upgrades a PostgeSQL 10.6 snapshot named db5-snapshot-upg-test to PostgreSQL 11.7. The new DB engine version is shown after the snapshot has finished upgrading and its status is available.
 * const input = {
 *   DBSnapshotIdentifier: "db5-snapshot-upg-test",
 *   EngineVersion: "11.7"
 * };
 * const command = new ModifyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSnapshot: {
 *     AllocatedStorage: 20,
 *     AvailabilityZone: "us-west-2a",
 *     DBInstanceIdentifier: "database-5",
 *     DBSnapshotArn: "arn:aws:rds:us-west-2:123456789012:snapshot:db5-snapshot-upg-test",
 *     DBSnapshotIdentifier: "db5-snapshot-upg-test",
 *     DbiResourceId: "db-GJMF75LM42IL6BTFRE4UZJ5YM4",
 *     Encrypted: false,
 *     Engine: "postgres",
 *     EngineVersion: "10.6",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     InstanceCreateTime: "2020-03-27T19:59:04.735Z",
 *     LicenseModel: "postgresql-license",
 *     MasterUsername: "postgres",
 *     OptionGroupName: "default:postgres-11",
 *     PercentProgress: 100,
 *     Port: 5432,
 *     ProcessorFeatures:     [],
 *     SnapshotCreateTime: "2020-03-27T20:49:17.092Z",
 *     SnapshotType: "manual",
 *     Status: "upgrading",
 *     StorageType: "gp2",
 *     VpcId: "vpc-2ff27557"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDBSnapshotCommand extends $Command
  .classBuilder<
    ModifyDBSnapshotCommandInput,
    ModifyDBSnapshotCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyDBSnapshot", {})
  .n("RDSClient", "ModifyDBSnapshotCommand")
  .sc(ModifyDBSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBSnapshotMessage;
      output: ModifyDBSnapshotResult;
    };
    sdk: {
      input: ModifyDBSnapshotCommandInput;
      output: ModifyDBSnapshotCommandOutput;
    };
  };
}
