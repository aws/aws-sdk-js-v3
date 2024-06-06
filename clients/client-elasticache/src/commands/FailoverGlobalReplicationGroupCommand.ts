// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { FailoverGlobalReplicationGroupMessage, FailoverGlobalReplicationGroupResult } from "../models/models_0";
import {
  de_FailoverGlobalReplicationGroupCommand,
  se_FailoverGlobalReplicationGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FailoverGlobalReplicationGroupCommand}.
 */
export interface FailoverGlobalReplicationGroupCommandInput extends FailoverGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link FailoverGlobalReplicationGroupCommand}.
 */
export interface FailoverGlobalReplicationGroupCommandOutput
  extends FailoverGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Used to failover the primary region to a secondary region. The secondary region will
 *             become primary, and all other clusters will become secondary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // FailoverGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   PrimaryRegion: "STRING_VALUE", // required
 *   PrimaryReplicationGroupId: "STRING_VALUE", // required
 * };
 * const command = new FailoverGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // FailoverGlobalReplicationGroupResult
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
 * @param FailoverGlobalReplicationGroupCommandInput - {@link FailoverGlobalReplicationGroupCommandInput}
 * @returns {@link FailoverGlobalReplicationGroupCommandOutput}
 * @see {@link FailoverGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 */
export class FailoverGlobalReplicationGroupCommand extends $Command
  .classBuilder<
    FailoverGlobalReplicationGroupCommandInput,
    FailoverGlobalReplicationGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "FailoverGlobalReplicationGroup", {})
  .n("ElastiCacheClient", "FailoverGlobalReplicationGroupCommand")
  .f(void 0, void 0)
  .ser(se_FailoverGlobalReplicationGroupCommand)
  .de(de_FailoverGlobalReplicationGroupCommand)
  .build() {}
