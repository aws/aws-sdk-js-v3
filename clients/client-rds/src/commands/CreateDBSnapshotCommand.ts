// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBSnapshotMessage, CreateDBSnapshotResult } from "../models/models_0";
import { de_CreateDBSnapshotCommand, se_CreateDBSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBSnapshotCommand}.
 */
export interface CreateDBSnapshotCommandInput extends CreateDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBSnapshotCommand}.
 */
export interface CreateDBSnapshotCommandOutput extends CreateDBSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or
 *                 <code>storage-optimization</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBSnapshotMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBSnapshotResult
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
 * //     OriginalSnapshotCreateTime: new Date("TIMESTAMP"),
 * //     SnapshotDatabaseTime: new Date("TIMESTAMP"),
 * //     SnapshotTarget: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //     DBSystemId: "STRING_VALUE",
 * //     DedicatedLogVolume: true || false,
 * //     MultiTenant: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBSnapshotCommandInput - {@link CreateDBSnapshotCommandInput}
 * @returns {@link CreateDBSnapshotCommandOutput}
 * @see {@link CreateDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBSnapshotAlreadyExistsFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> is already used by an existing snapshot.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To create a DB snapshot
 * ```javascript
 * // The following example creates a DB snapshot.
 * const input = {
 *   DBInstanceIdentifier: "mydbsnapshot",
 *   DBSnapshotIdentifier: "database-mysql"
 * };
 * const command = new CreateDBSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSnapshot: {
 *     AllocatedStorage: 100,
 *     AvailabilityZone: "us-east-1b",
 *     DBInstanceIdentifier: "database-mysql",
 *     DBSnapshotArn: "arn:aws:rds:us-east-1:123456789012:snapshot:mydbsnapshot",
 *     DBSnapshotIdentifier: "mydbsnapshot",
 *     DbiResourceId: "db-AKIAIOSFODNN7EXAMPLE",
 *     Encrypted: true,
 *     Engine: "mysql",
 *     EngineVersion: "8.0.32",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     InstanceCreateTime: "2019-04-30T15:45:53.663Z",
 *     Iops: 1000,
 *     KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     LicenseModel: "general-public-license",
 *     MasterUsername: "admin",
 *     OptionGroupName: "default:mysql-8-0",
 *     PercentProgress: 0,
 *     Port: 3306,
 *     ProcessorFeatures:     [],
 *     SnapshotType: "manual",
 *     Status: "creating",
 *     StorageType: "io1",
 *     VpcId: "vpc-6594f31c"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDBSnapshotCommand extends $Command
  .classBuilder<
    CreateDBSnapshotCommandInput,
    CreateDBSnapshotCommandOutput,
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
  .s("AmazonRDSv19", "CreateDBSnapshot", {})
  .n("RDSClient", "CreateDBSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CreateDBSnapshotCommand)
  .de(de_CreateDBSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBSnapshotMessage;
      output: CreateDBSnapshotResult;
    };
    sdk: {
      input: CreateDBSnapshotCommandInput;
      output: CreateDBSnapshotCommandOutput;
    };
  };
}
