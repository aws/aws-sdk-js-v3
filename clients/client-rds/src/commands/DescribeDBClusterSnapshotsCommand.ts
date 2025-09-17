// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterSnapshotMessage, DescribeDBClusterSnapshotsMessage } from "../models/models_1";
import { de_DescribeDBClusterSnapshotsCommand, se_DescribeDBClusterSnapshotsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterSnapshotsCommand}.
 */
export interface DescribeDBClusterSnapshotsCommandInput extends DescribeDBClusterSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterSnapshotsCommand}.
 */
export interface DescribeDBClusterSnapshotsCommandOutput extends DBClusterSnapshotMessage, __MetadataBearer {}

/**
 * <p>Returns information about DB cluster snapshots. This API action supports pagination.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterSnapshotsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterSnapshotsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterSnapshotsMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   DBClusterSnapshotIdentifier: "STRING_VALUE",
 *   SnapshotType: "STRING_VALUE",
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
 *   IncludeShared: true || false,
 *   IncludePublic: true || false,
 *   DbClusterResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeDBClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterSnapshotMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterSnapshots: [ // DBClusterSnapshotList
 * //     { // DBClusterSnapshot
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       Engine: "STRING_VALUE",
 * //       EngineMode: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       VpcId: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       PercentProgress: Number("int"),
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DBClusterSnapshotArn: "STRING_VALUE",
 * //       SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBSystemId: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       DbClusterResourceId: "STRING_VALUE",
 * //       StorageThroughput: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterSnapshotsCommandInput - {@link DescribeDBClusterSnapshotsCommandInput}
 * @returns {@link DescribeDBClusterSnapshotsCommandOutput}
 * @see {@link DescribeDBClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe a DB cluster snapshot for a DB cluster
 * ```javascript
 * // The following example retrieves the details for the DB cluster snapshots for the specified DB cluster.
 * const input = {
 *   DBClusterIdentifier: "mydbcluster"
 * };
 * const command = new DescribeDBClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterSnapshots: [
 *     {
 *       AllocatedStorage: 0,
 *       AvailabilityZones: [
 *         "us-east-1a",
 *         "us-east-1b",
 *         "us-east-1e"
 *       ],
 *       ClusterCreateTime: "2019-04-15T14:18:42.785Z",
 *       DBClusterIdentifier: "mydbcluster",
 *       DBClusterSnapshotArn: "arn:aws:rds:us-east-1:814387698303:cluster-snapshot:myclustersnapshotcopy",
 *       DBClusterSnapshotIdentifier: "myclustersnapshotcopy",
 *       Engine: "aurora-mysql",
 *       EngineVersion: "5.7.mysql_aurora.2.04.2",
 *       IAMDatabaseAuthenticationEnabled: false,
 *       KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *       LicenseModel: "aurora-mysql",
 *       MasterUsername: "myadmin",
 *       PercentProgress: 100,
 *       Port: 0,
 *       SnapshotCreateTime: "2019-06-04T09:16:42.649Z",
 *       SnapshotType: "manual",
 *       Status: "available",
 *       StorageEncrypted: true,
 *       VpcId: "vpc-6594f31c"
 *     },
 *     {
 *       AllocatedStorage: 0,
 *       AvailabilityZones: [
 *         "us-east-1a",
 *         "us-east-1b",
 *         "us-east-1e"
 *       ],
 *       ClusterCreateTime: "2019-04-15T14:18:42.785Z",
 *       DBClusterIdentifier: "mydbcluster",
 *       DBClusterSnapshotArn: "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:rds:mydbcluster-2019-06-20-09-16",
 *       DBClusterSnapshotIdentifier: "rds:mydbcluster-2019-06-20-09-16",
 *       Engine: "aurora-mysql",
 *       EngineVersion: "5.7.mysql_aurora.2.04.2",
 *       IAMDatabaseAuthenticationEnabled: false,
 *       KmsKeyId: "arn:aws:kms:us-east-1:814387698303:key/AKIAIOSFODNN7EXAMPLE",
 *       LicenseModel: "aurora-mysql",
 *       MasterUsername: "myadmin",
 *       PercentProgress: 100,
 *       Port: 0,
 *       SnapshotCreateTime: "2019-06-20T09:16:26.569Z",
 *       SnapshotType: "automated",
 *       Status: "available",
 *       StorageEncrypted: true,
 *       VpcId: "vpc-6594f31c"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBClusterSnapshotsCommand extends $Command
  .classBuilder<
    DescribeDBClusterSnapshotsCommandInput,
    DescribeDBClusterSnapshotsCommandOutput,
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
  .s("AmazonRDSv19", "DescribeDBClusterSnapshots", {})
  .n("RDSClient", "DescribeDBClusterSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterSnapshotsCommand)
  .de(de_DescribeDBClusterSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClusterSnapshotsMessage;
      output: DBClusterSnapshotMessage;
    };
    sdk: {
      input: DescribeDBClusterSnapshotsCommandInput;
      output: DescribeDBClusterSnapshotsCommandOutput;
    };
  };
}
