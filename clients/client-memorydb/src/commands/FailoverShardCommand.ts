// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { FailoverShardRequest, FailoverShardResponse } from "../models/models_0";
import { FailoverShard } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FailoverShardCommand}.
 */
export interface FailoverShardCommandInput extends FailoverShardRequest {}
/**
 * @public
 *
 * The output of {@link FailoverShardCommand}.
 */
export interface FailoverShardCommandOutput extends FailoverShardResponse, __MetadataBearer {}

/**
 * <p>Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating
 *          a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, FailoverShardCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, FailoverShardCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // FailoverShardRequest
 *   ClusterName: "STRING_VALUE", // required
 *   ShardName: "STRING_VALUE", // required
 * };
 * const command = new FailoverShardCommand(input);
 * const response = await client.send(command);
 * // { // FailoverShardResponse
 * //   Cluster: { // Cluster
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     PendingUpdates: { // ClusterPendingUpdates
 * //       Resharding: { // ReshardingStatus
 * //         SlotMigration: { // SlotMigration
 * //           ProgressPercentage: Number("double"),
 * //         },
 * //       },
 * //       ACLs: { // ACLsUpdateStatus
 * //         ACLToApply: "STRING_VALUE",
 * //       },
 * //       ServiceUpdates: [ // PendingModifiedServiceUpdateList
 * //         { // PendingModifiedServiceUpdate
 * //           ServiceUpdateName: "STRING_VALUE",
 * //           Status: "available" || "in-progress" || "complete" || "scheduled",
 * //         },
 * //       ],
 * //     },
 * //     MultiRegionClusterName: "STRING_VALUE",
 * //     NumberOfShards: Number("int"),
 * //     Shards: [ // ShardList
 * //       { // Shard
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         Slots: "STRING_VALUE",
 * //         Nodes: [ // NodeList
 * //           { // Node
 * //             Name: "STRING_VALUE",
 * //             Status: "STRING_VALUE",
 * //             AvailabilityZone: "STRING_VALUE",
 * //             CreateTime: new Date("TIMESTAMP"),
 * //             Endpoint: { // Endpoint
 * //               Address: "STRING_VALUE",
 * //               Port: Number("int"),
 * //             },
 * //           },
 * //         ],
 * //         NumberOfNodes: Number("int"),
 * //       },
 * //     ],
 * //     AvailabilityMode: "singleaz" || "multiaz",
 * //     ClusterEndpoint: {
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     NodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     EnginePatchVersion: "STRING_VALUE",
 * //     ParameterGroupName: "STRING_VALUE",
 * //     ParameterGroupStatus: "STRING_VALUE",
 * //     SecurityGroups: [ // SecurityGroupMembershipList
 * //       { // SecurityGroupMembership
 * //         SecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SubnetGroupName: "STRING_VALUE",
 * //     TLSEnabled: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //     SnsTopicStatus: "STRING_VALUE",
 * //     SnapshotRetentionLimit: Number("int"),
 * //     MaintenanceWindow: "STRING_VALUE",
 * //     SnapshotWindow: "STRING_VALUE",
 * //     ACLName: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     DataTiering: "true" || "false",
 * //     NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //     IpDiscovery: "ipv4" || "ipv6",
 * //   },
 * // };
 *
 * ```
 *
 * @param FailoverShardCommandInput - {@link FailoverShardCommandInput}
 * @returns {@link FailoverShardCommandOutput}
 * @see {@link FailoverShardCommandInput} for command's `input` shape.
 * @see {@link FailoverShardCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link APICallRateForCustomerExceededFault} (client fault)
 *  <p>The customer has exceeded the maximum number of API requests allowed per time period.</p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The specified cluster does not exist.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The cluster is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InvalidKMSKeyFault} (client fault)
 *  <p>The specified KMS key is not valid or accessible.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link ShardNotFoundFault} (client fault)
 *  <p>The specified shard does not exist.</p>
 *
 * @throws {@link TestFailoverNotAvailableFault} (client fault)
 *  <p>Test failover is not available for this cluster configuration.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class FailoverShardCommand extends $Command
  .classBuilder<
    FailoverShardCommandInput,
    FailoverShardCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "FailoverShard", {})
  .n("MemoryDBClient", "FailoverShardCommand")
  .sc(FailoverShard)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FailoverShardRequest;
      output: FailoverShardResponse;
    };
    sdk: {
      input: FailoverShardCommandInput;
      output: FailoverShardCommandOutput;
    };
  };
}
