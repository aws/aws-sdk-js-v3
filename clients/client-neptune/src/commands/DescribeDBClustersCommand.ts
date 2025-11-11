// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterMessage, DescribeDBClustersMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
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
 * <p>Returns information about provisioned DB clusters, and supports
 *       pagination.</p>
 *          <note>
 *             <p>This operation can also return information for Amazon RDS clusters
 *     and Amazon DocDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClustersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClustersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
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
 * //       AllocatedStorage: Number("int"),
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       BackupRetentionPeriod: Number("int"),
 * //       CharacterSetName: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
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
 * //       DBClusterOptionGroupMemberships: [ // DBClusterOptionGroupMemberships
 * //         { // DBClusterOptionGroupStatus
 * //           DBClusterOptionGroupName: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
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
 * //           FeatureName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       CloneGroupId: "STRING_VALUE",
 * //       ClusterCreateTime: new Date("TIMESTAMP"),
 * //       CopyTagsToSnapshot: true || false,
 * //       EnabledCloudwatchLogsExports: [ // LogTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       PendingModifiedValues: { // ClusterPendingModifiedValues
 * //         PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //           LogTypesToEnable: [
 * //             "STRING_VALUE",
 * //           ],
 * //           LogTypesToDisable: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         DBClusterIdentifier: "STRING_VALUE",
 * //         IAMDatabaseAuthenticationEnabled: true || false,
 * //         EngineVersion: "STRING_VALUE",
 * //         BackupRetentionPeriod: Number("int"),
 * //         StorageType: "STRING_VALUE",
 * //         AllocatedStorage: Number("int"),
 * //         Iops: Number("int"),
 * //       },
 * //       DeletionProtection: true || false,
 * //       CrossAccountClone: true || false,
 * //       AutomaticRestartTime: new Date("TIMESTAMP"),
 * //       ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //         MinCapacity: Number("double"),
 * //         MaxCapacity: Number("double"),
 * //       },
 * //       GlobalClusterIdentifier: "STRING_VALUE",
 * //       IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //       StorageType: "STRING_VALUE",
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeDBClustersCommand extends $Command
  .classBuilder<
    DescribeDBClustersCommandInput,
    DescribeDBClustersCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBClusters", {})
  .n("NeptuneClient", "DescribeDBClustersCommand")
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
