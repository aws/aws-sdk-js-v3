// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DBClusterMessage, DescribeDBClustersMessage } from "../models/models_0";
import { DescribeDBClusters } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClustersCommand}.
 */
export interface DescribeDBClustersCommandInput extends DescribeDBClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClustersCommand}.
 */
export interface DescribeDBClustersCommandOutput extends DBClusterMessage, __MetadataBearer {}

/**
 * <p>Returns information about provisioned Amazon DocumentDB clusters. This API
 *             operation supports pagination. For certain management features
 *             such as cluster and instance lifecycle management, Amazon DocumentDB leverages
 *             operational technology that is shared with Amazon RDS and Amazon
 *             Neptune. Use the <code>filterName=engine,Values=docdb</code> filter
 *             parameter to return only Amazon DocumentDB clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClustersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClustersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // DescribeDBClustersMessage
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
 * const command = new DescribeDBClustersCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusters: [ // DBClusterList
 * //     { // DBCluster
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       BackupRetentionPeriod: Number("int"),
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       DBClusterParameterGroup: "STRING_VALUE",
 * //       DBSubnetGroup: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       PercentProgress: "STRING_VALUE",
 * //       EarliestRestorableTime: new Date("TIMESTAMP"),
 * //       Endpoint: "STRING_VALUE",
 * //       ReaderEndpoint: "STRING_VALUE",
 * //       MultiAZ: true || false,
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LatestRestorableTime: new Date("TIMESTAMP"),
 * //       Port: Number("int"),
 * //       MasterUsername: "STRING_VALUE",
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       ReplicationSourceIdentifier: "STRING_VALUE",
 * //       ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterMembers: [ // DBClusterMemberList
 * //         { // DBClusterMember
 * //           DBInstanceIdentifier: "STRING_VALUE",
 * //           IsClusterWriter: true || false,
 * //           DBClusterParameterGroupStatus: "STRING_VALUE",
 * //           PromotionTier: Number("int"),
 * //         },
 * //       ],
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HostedZoneId: "STRING_VALUE",
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DbClusterResourceId: "STRING_VALUE",
 * //       DBClusterArn: "STRING_VALUE",
 * //       AssociatedRoles: [ // DBClusterRoles
 * //         { // DBClusterRole
 * //           RoleArn: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CloneGroupId: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       EnabledCloudwatchLogsExports: [ // LogTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       DeletionProtection: true || false,
 * //       IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //       StorageType: "STRING_VALUE",
 * //       ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //         MinCapacity: Number("double"),
 * //         MaxCapacity: Number("double"),
 * //       },
 * //       MasterUserSecret: { // ClusterMasterUserSecret
 * //         SecretArn: "STRING_VALUE",
 * //         SecretStatus: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       NetworkType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClustersCommandInput - {@link DescribeDBClustersCommandInput}
 * @returns {@link DescribeDBClustersCommandOutput}
 * @see {@link DescribeDBClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClustersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing cluster. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeDBClustersCommand extends $Command
  .classBuilder<
    DescribeDBClustersCommandInput,
    DescribeDBClustersCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBClusters", {})
  .n("DocDBClient", "DescribeDBClustersCommand")
  .sc(DescribeDBClusters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClustersMessage;
      output: DBClusterMessage;
    };
    sdk: {
      input: DescribeDBClustersCommandInput;
      output: DescribeDBClustersCommandOutput;
    };
  };
}
