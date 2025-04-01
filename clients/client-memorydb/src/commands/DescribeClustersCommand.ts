// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/models_0";
import { de_DescribeClustersCommand, se_DescribeClustersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandInput extends DescribeClustersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClustersCommand}.
 */
export interface DescribeClustersCommandOutput extends DescribeClustersResponse, __MetadataBearer {}

/**
 * <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeClustersCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeClustersCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeClustersRequest
 *   ClusterName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ShowShardDetails: true || false,
 * };
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClustersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Clusters: [ // ClusterList
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
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClustersCommandInput - {@link DescribeClustersCommandInput}
 * @returns {@link DescribeClustersCommandOutput}
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DescribeClustersCommand extends $Command
  .classBuilder<
    DescribeClustersCommandInput,
    DescribeClustersCommandOutput,
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
  .s("AmazonMemoryDB", "DescribeClusters", {})
  .n("MemoryDBClient", "DescribeClustersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClustersCommand)
  .de(de_DescribeClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClustersRequest;
      output: DescribeClustersResponse;
    };
    sdk: {
      input: DescribeClustersCommandInput;
      output: DescribeClustersCommandOutput;
    };
  };
}
