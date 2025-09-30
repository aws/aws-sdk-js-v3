// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/models_0";
import { de_DeleteDBClusterSnapshotCommand, se_DeleteDBClusterSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandInput extends DeleteDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandOutput extends DeleteDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p>
 *          <note>
 *             <p>The DB cluster snapshot must be in the <code>available</code> state to be
 *             deleted.</p>
 *          </note>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterSnapshotResult
 * //   DBClusterSnapshot: { // DBClusterSnapshot
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     EngineMode: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StorageType: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     DBSystemId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterSnapshotCommandInput - {@link DeleteDBClusterSnapshotCommandInput}
 * @returns {@link DeleteDBClusterSnapshotCommandOutput}
 * @see {@link DeleteDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To delete a DB cluster snapshot
 * ```javascript
 * //
 * const input = {
 *   DBClusterSnapshotIdentifier: "mydbclustersnapshot"
 * };
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterSnapshot: {
 *     AllocatedStorage: 0,
 *     AvailabilityZones: [
 *       "us-east-1a",
 *       "us-east-1b",
 *       "us-east-1e"
 *     ],
 *     ClusterCreateTime: "2019-04-15T14:18:42.785Z",
 *     DBClusterIdentifier: "mydbcluster",
 *     DBClusterSnapshotArn: "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:mydbclustersnapshot",
 *     DBClusterSnapshotIdentifier: "mydbclustersnapshot",
 *     Engine: "aurora-mysql",
 *     EngineVersion: "5.7.mysql_aurora.2.04.2",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     LicenseModel: "aurora-mysql",
 *     MasterUsername: "myadmin",
 *     PercentProgress: 100,
 *     Port: 0,
 *     SnapshotCreateTime: "2019-06-18T21:21:00.469Z",
 *     SnapshotType: "manual",
 *     Status: "available",
 *     StorageEncrypted: true,
 *     VpcId: "vpc-6594f31c"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDBClusterSnapshotCommand extends $Command
  .classBuilder<
    DeleteDBClusterSnapshotCommandInput,
    DeleteDBClusterSnapshotCommandOutput,
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
  .s("AmazonRDSv19", "DeleteDBClusterSnapshot", {})
  .n("RDSClient", "DeleteDBClusterSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBClusterSnapshotCommand)
  .de(de_DeleteDBClusterSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBClusterSnapshotMessage;
      output: DeleteDBClusterSnapshotResult;
    };
    sdk: {
      input: DeleteDBClusterSnapshotCommandInput;
      output: DeleteDBClusterSnapshotCommandOutput;
    };
  };
}
