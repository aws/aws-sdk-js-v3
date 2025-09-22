// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RebalanceSlotsInGlobalReplicationGroupMessage,
  RebalanceSlotsInGlobalReplicationGroupResult,
} from "../models/models_0";
import { RebalanceSlotsInGlobalReplicationGroup } from "../schemas/schemas_7_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebalanceSlotsInGlobalReplicationGroupCommand}.
 */
export interface RebalanceSlotsInGlobalReplicationGroupCommandInput
  extends RebalanceSlotsInGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link RebalanceSlotsInGlobalReplicationGroupCommand}.
 */
export interface RebalanceSlotsInGlobalReplicationGroupCommandOutput
  extends RebalanceSlotsInGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Redistribute slots to ensure uniform distribution across existing shards in the
 *             cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // RebalanceSlotsInGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   ApplyImmediately: true || false, // required
 * };
 * const command = new RebalanceSlotsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // RebalanceSlotsInGlobalReplicationGroupResult
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
 * @param RebalanceSlotsInGlobalReplicationGroupCommandInput - {@link RebalanceSlotsInGlobalReplicationGroupCommandInput}
 * @returns {@link RebalanceSlotsInGlobalReplicationGroupCommandOutput}
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
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
export class RebalanceSlotsInGlobalReplicationGroupCommand extends $Command
  .classBuilder<
    RebalanceSlotsInGlobalReplicationGroupCommandInput,
    RebalanceSlotsInGlobalReplicationGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "RebalanceSlotsInGlobalReplicationGroup", {})
  .n("ElastiCacheClient", "RebalanceSlotsInGlobalReplicationGroupCommand")
  .sc(RebalanceSlotsInGlobalReplicationGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebalanceSlotsInGlobalReplicationGroupMessage;
      output: RebalanceSlotsInGlobalReplicationGroupResult;
    };
    sdk: {
      input: RebalanceSlotsInGlobalReplicationGroupCommandInput;
      output: RebalanceSlotsInGlobalReplicationGroupCommandOutput;
    };
  };
}
