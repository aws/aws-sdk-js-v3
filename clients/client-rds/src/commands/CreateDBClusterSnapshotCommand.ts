// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBClusterSnapshotMessage, CreateDBClusterSnapshotResult } from "../models/models_0";
import { de_CreateDBClusterSnapshotCommand, se_CreateDBClusterSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandInput extends CreateDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandOutput extends CreateDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a snapshot of a DB cluster.</p>
 *          <p>For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon
 *                 Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterSnapshotResult
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
 * //     DBSystemId: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBClusterSnapshotCommandInput - {@link CreateDBClusterSnapshotCommandInput}
 * @returns {@link CreateDBClusterSnapshotCommandOutput}
 * @see {@link CreateDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB cluster snapshot with the given identifier.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To create a DB cluster snapshot
 * ```javascript
 * // The following example creates a DB cluster snapshot.
 * const input = {
 *   "DBClusterIdentifier": "mydbclustersnapshot",
 *   "DBClusterSnapshotIdentifier": "mydbcluster"
 * };
 * const command = new CreateDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterSnapshot": {
 *     "AllocatedStorage": 1,
 *     "AvailabilityZones": [
 *       "us-east-1a",
 *       "us-east-1b",
 *       "us-east-1e"
 *     ],
 *     "ClusterCreateTime": "2019-04-15T14:18:42.785Z",
 *     "DBClusterIdentifier": "mydbcluster",
 *     "DBClusterSnapshotArn": "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:mydbclustersnapshot",
 *     "DBClusterSnapshotIdentifier": "mydbclustersnapshot",
 *     "Engine": "aurora-mysql",
 *     "EngineVersion": "5.7.mysql_aurora.2.04.2",
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     "LicenseModel": "aurora-mysql",
 *     "MasterUsername": "myadmin",
 *     "PercentProgress": 0,
 *     "Port": 0,
 *     "SnapshotCreateTime": "2019-06-18T21:21:00.469Z",
 *     "SnapshotType": "manual",
 *     "Status": "creating",
 *     "StorageEncrypted": true,
 *     "VpcId": "vpc-6594f31c"
 *   }
 * }
 * *\/
 * // example id: to-create-a-db-cluster-snapshot-1679703154423
 * ```
 *
 */
export class CreateDBClusterSnapshotCommand extends $Command
  .classBuilder<
    CreateDBClusterSnapshotCommandInput,
    CreateDBClusterSnapshotCommandOutput,
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
  .s("AmazonRDSv19", "CreateDBClusterSnapshot", {})
  .n("RDSClient", "CreateDBClusterSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CreateDBClusterSnapshotCommand)
  .de(de_CreateDBClusterSnapshotCommand)
  .build() {}
