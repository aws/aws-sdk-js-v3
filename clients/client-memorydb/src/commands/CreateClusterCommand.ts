// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { CreateCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandInput extends CreateClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterCommand}.
 */
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {}

/**
 * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // CreateClusterRequest
 *   ClusterName: "STRING_VALUE", // required
 *   NodeType: "STRING_VALUE", // required
 *   MultiRegionClusterName: "STRING_VALUE",
 *   ParameterGroupName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   NumShards: Number("int"),
 *   NumReplicasPerShard: Number("int"),
 *   SubnetGroupName: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   MaintenanceWindow: "STRING_VALUE",
 *   Port: Number("int"),
 *   SnsTopicArn: "STRING_VALUE",
 *   TLSEnabled: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   SnapshotArns: [ // SnapshotArnsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotName: "STRING_VALUE",
 *   SnapshotRetentionLimit: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SnapshotWindow: "STRING_VALUE",
 *   ACLName: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   DataTiering: true || false,
 *   NetworkType: "ipv4" || "ipv6" || "dual_stack",
 *   IpDiscovery: "ipv4" || "ipv6",
 * };
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterResponse
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
 * @param CreateClusterCommandInput - {@link CreateClusterCommandInput}
 * @returns {@link CreateClusterCommandOutput}
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p>The specified ACL does not exist.</p>
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *  <p>A cluster with the specified name already exists.</p>
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of clusters allowed for this customer.</p>
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *  <p>The cluster does not have sufficient capacity to perform the requested operation.</p>
 *
 * @throws {@link InvalidACLStateFault} (client fault)
 *  <p>The ACL is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *  <p>The provided credentials are not valid.</p>
 *
 * @throws {@link InvalidMultiRegionClusterStateFault} (client fault)
 *  <p>The requested operation cannot be performed on the multi-Region cluster in its current state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The VPC network is not in a valid state for the requested operation.</p>
 *
 * @throws {@link MultiRegionClusterNotFoundFault} (client fault)
 *  <p>The specified multi-Region cluster does not exist.</p>
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of nodes allowed for this cluster.</p>
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of nodes allowed for this customer.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link ShardsPerClusterQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of shards allowed per cluster.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The specified subnet group does not exist.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of tags allowed per resource.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class CreateClusterCommand extends $Command
  .classBuilder<
    CreateClusterCommandInput,
    CreateClusterCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "CreateCluster", {})
  .n("MemoryDBClient", "CreateClusterCommand")
  .sc(CreateCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterRequest;
      output: CreateClusterResponse;
    };
    sdk: {
      input: CreateClusterCommandInput;
      output: CreateClusterCommandOutput;
    };
  };
}
