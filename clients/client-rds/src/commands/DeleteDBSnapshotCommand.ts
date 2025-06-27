// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBSnapshotMessage, DeleteDBSnapshotResult } from "../models/models_0";
import { de_DeleteDBSnapshotCommand, se_DeleteDBSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBSnapshotCommand}.
 */
export interface DeleteDBSnapshotCommandInput extends DeleteDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBSnapshotCommand}.
 */
export interface DeleteDBSnapshotCommandOutput extends DeleteDBSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is
 *             terminated.</p>
 *          <note>
 *             <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBSnapshotMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBSnapshotResult
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
 * //     SnapshotAvailabilityZone: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBSnapshotCommandInput - {@link DeleteDBSnapshotCommandInput}
 * @returns {@link DeleteDBSnapshotCommandOutput}
 * @see {@link DeleteDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot doesn't allow deletion.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To delete a DB snapshot
 * ```javascript
 * // The following example deletes the specified DB snapshot.
 * const input = {
 *   DBSnapshotIdentifier: "mydbsnapshot"
 * };
 * const command = new DeleteDBSnapshotCommand(input);
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
 *     EngineVersion: "5.6.40",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     InstanceCreateTime: "2019-04-30T15:45:53.663Z",
 *     Iops: 1000,
 *     KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     LicenseModel: "general-public-license",
 *     MasterUsername: "admin",
 *     OptionGroupName: "default:mysql-5-6",
 *     PercentProgress: 100,
 *     Port: 3306,
 *     ProcessorFeatures:     [],
 *     SnapshotCreateTime: "2019-06-18T22:08:40.702Z",
 *     SnapshotType: "manual",
 *     Status: "deleted",
 *     StorageType: "io1",
 *     VpcId: "vpc-6594f31c"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDBSnapshotCommand extends $Command
  .classBuilder<
    DeleteDBSnapshotCommandInput,
    DeleteDBSnapshotCommandOutput,
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
  .s("AmazonRDSv19", "DeleteDBSnapshot", {})
  .n("RDSClient", "DeleteDBSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBSnapshotCommand)
  .de(de_DeleteDBSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBSnapshotMessage;
      output: DeleteDBSnapshotResult;
    };
    sdk: {
      input: DeleteDBSnapshotCommandInput;
      output: DeleteDBSnapshotCommandOutput;
    };
  };
}
