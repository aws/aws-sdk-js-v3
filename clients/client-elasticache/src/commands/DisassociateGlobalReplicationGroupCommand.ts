// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateGlobalReplicationGroupMessage,
  DisassociateGlobalReplicationGroupResult,
} from "../models/models_0";
import { DisassociateGlobalReplicationGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateGlobalReplicationGroupCommand}.
 */
export interface DisassociateGlobalReplicationGroupCommandInput extends DisassociateGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link DisassociateGlobalReplicationGroupCommand}.
 */
export interface DisassociateGlobalReplicationGroupCommandOutput extends DisassociateGlobalReplicationGroupResult, __MetadataBearer {}

/**
 * <p>Remove a secondary cluster from the Global datastore using the Global datastore name.
 *             The secondary cluster will no longer receive updates from the primary cluster, but will
 *             remain as a standalone cluster in that Amazon region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DisassociateGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DisassociateGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DisassociateGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   ReplicationGroupId: "STRING_VALUE", // required
 *   ReplicationGroupRegion: "STRING_VALUE", // required
 * };
 * const command = new DisassociateGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateGlobalReplicationGroupResult
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
 * @param DisassociateGlobalReplicationGroupCommandInput - {@link DisassociateGlobalReplicationGroupCommandInput}
 * @returns {@link DisassociateGlobalReplicationGroupCommandOutput}
 * @see {@link DisassociateGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateGlobalReplicationGroupCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DisassociateGlobalReplicationGroupCommand extends $Command
  .classBuilder<
    DisassociateGlobalReplicationGroupCommandInput,
    DisassociateGlobalReplicationGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DisassociateGlobalReplicationGroup", {})
  .n("ElastiCacheClient", "DisassociateGlobalReplicationGroupCommand")
  .sc(DisassociateGlobalReplicationGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateGlobalReplicationGroupMessage;
      output: DisassociateGlobalReplicationGroupResult;
    };
    sdk: {
      input: DisassociateGlobalReplicationGroupCommandInput;
      output: DisassociateGlobalReplicationGroupCommandOutput;
    };
  };
}
