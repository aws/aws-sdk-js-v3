// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { BatchUpdateClusterRequest, BatchUpdateClusterResponse } from "../models/models_0";
import { de_BatchUpdateClusterCommand, se_BatchUpdateClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateClusterCommand}.
 */
export interface BatchUpdateClusterCommandInput extends BatchUpdateClusterRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateClusterCommand}.
 */
export interface BatchUpdateClusterCommandOutput extends BatchUpdateClusterResponse, __MetadataBearer {}

/**
 * <p>Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, BatchUpdateClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, BatchUpdateClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // BatchUpdateClusterRequest
 *   ClusterNames: [ // ClusterNameList // required
 *     "STRING_VALUE",
 *   ],
 *   ServiceUpdate: { // ServiceUpdateRequest
 *     ServiceUpdateNameToApply: "STRING_VALUE",
 *   },
 * };
 * const command = new BatchUpdateClusterCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateClusterResponse
 * //   ProcessedClusters: [ // ClusterList
 * //     { // Cluster
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       PendingUpdates: { // ClusterPendingUpdates
 * //         Resharding: { // ReshardingStatus
 * //           SlotMigration: { // SlotMigration
 * //             ProgressPercentage: Number("double"),
 * //           },
 * //         },
 * //         ACLs: { // ACLsUpdateStatus
 * //           ACLToApply: "STRING_VALUE",
 * //         },
 * //         ServiceUpdates: [ // PendingModifiedServiceUpdateList
 * //           { // PendingModifiedServiceUpdate
 * //             ServiceUpdateName: "STRING_VALUE",
 * //             Status: "available" || "in-progress" || "complete" || "scheduled",
 * //           },
 * //         ],
 * //       },
 * //       MultiRegionClusterName: "STRING_VALUE",
 * //       NumberOfShards: Number("int"),
 * //       Shards: [ // ShardList
 * //         { // Shard
 * //           Name: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           Slots: "STRING_VALUE",
 * //           Nodes: [ // NodeList
 * //             { // Node
 * //               Name: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //               AvailabilityZone: "STRING_VALUE",
 * //               CreateTime: new Date("TIMESTAMP"),
 * //               Endpoint: { // Endpoint
 * //                 Address: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //               },
 * //             },
 * //           ],
 * //           NumberOfNodes: Number("int"),
 * //         },
 * //       ],
 * //       AvailabilityMode: "singleaz" || "multiaz",
 * //       ClusterEndpoint: {
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       NodeType: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       EnginePatchVersion: "STRING_VALUE",
 * //       ParameterGroupName: "STRING_VALUE",
 * //       ParameterGroupStatus: "STRING_VALUE",
 * //       SecurityGroups: [ // SecurityGroupMembershipList
 * //         { // SecurityGroupMembership
 * //           SecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SubnetGroupName: "STRING_VALUE",
 * //       TLSEnabled: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       SnsTopicArn: "STRING_VALUE",
 * //       SnsTopicStatus: "STRING_VALUE",
 * //       SnapshotRetentionLimit: Number("int"),
 * //       MaintenanceWindow: "STRING_VALUE",
 * //       SnapshotWindow: "STRING_VALUE",
 * //       ACLName: "STRING_VALUE",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       DataTiering: "true" || "false",
 * //       NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //       IpDiscovery: "ipv4" || "ipv6",
 * //     },
 * //   ],
 * //   UnprocessedClusters: [ // UnprocessedClusterList
 * //     { // UnprocessedCluster
 * //       ClusterName: "STRING_VALUE",
 * //       ErrorType: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateClusterCommandInput - {@link BatchUpdateClusterCommandInput}
 * @returns {@link BatchUpdateClusterCommandOutput}
 * @see {@link BatchUpdateClusterCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceUpdateNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class BatchUpdateClusterCommand extends $Command
  .classBuilder<
    BatchUpdateClusterCommandInput,
    BatchUpdateClusterCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "BatchUpdateCluster", {})
  .n("MemoryDBClient", "BatchUpdateClusterCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateClusterCommand)
  .de(de_BatchUpdateClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateClusterRequest;
      output: BatchUpdateClusterResponse;
    };
    sdk: {
      input: BatchUpdateClusterCommandInput;
      output: BatchUpdateClusterCommandOutput;
    };
  };
}
