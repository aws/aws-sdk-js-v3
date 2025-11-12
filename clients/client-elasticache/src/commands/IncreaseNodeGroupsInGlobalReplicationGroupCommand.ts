// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  IncreaseNodeGroupsInGlobalReplicationGroupResult,
} from "../models/models_0";
import { IncreaseNodeGroupsInGlobalReplicationGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}.
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandInput
  extends IncreaseNodeGroupsInGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link IncreaseNodeGroupsInGlobalReplicationGroupCommand}.
 */
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  extends IncreaseNodeGroupsInGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Increase the number of node groups in the Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // IncreaseNodeGroupsInGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   NodeGroupCount: Number("int"), // required
 *   RegionalConfigurations: [ // RegionalConfigurationList
 *     { // RegionalConfiguration
 *       ReplicationGroupId: "STRING_VALUE", // required
 *       ReplicationGroupRegion: "STRING_VALUE", // required
 *       ReshardingConfiguration: [ // ReshardingConfigurationList // required
 *         { // ReshardingConfiguration
 *           NodeGroupId: "STRING_VALUE",
 *           PreferredAvailabilityZones: [ // AvailabilityZonesList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   ApplyImmediately: true || false, // required
 * };
 * const command = new IncreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // IncreaseNodeGroupsInGlobalReplicationGroupResult
 * //   GlobalReplicationGroup: { // GlobalReplicationGroup
 * //     GlobalReplicationGroupId: "STRING_VALUE",
 * //     GlobalReplicationGroupDescription: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     Members: [ // GlobalReplicationGroupMemberList
 * //       { // GlobalReplicationGroupMember
 * //         ReplicationGroupId: "STRING_VALUE",
 * //         ReplicationGroupRegion: "STRING_VALUE",
 * //         Role: "STRING_VALUE",
 * //         AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ClusterEnabled: true || false,
 * //     GlobalNodeGroups: [ // GlobalNodeGroupList
 * //       { // GlobalNodeGroup
 * //         GlobalNodeGroupId: "STRING_VALUE",
 * //         Slots: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AuthTokenEnabled: true || false,
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param IncreaseNodeGroupsInGlobalReplicationGroupCommandInput - {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput}
 * @returns {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput}
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class IncreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command
  .classBuilder<
    IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "IncreaseNodeGroupsInGlobalReplicationGroup", {})
  .n("ElastiCacheClient", "IncreaseNodeGroupsInGlobalReplicationGroupCommand")
  .sc(IncreaseNodeGroupsInGlobalReplicationGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IncreaseNodeGroupsInGlobalReplicationGroupMessage;
      output: IncreaseNodeGroupsInGlobalReplicationGroupResult;
    };
    sdk: {
      input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput;
      output: IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput;
    };
  };
}
