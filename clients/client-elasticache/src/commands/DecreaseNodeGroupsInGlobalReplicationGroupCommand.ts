// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  DecreaseNodeGroupsInGlobalReplicationGroupResult,
} from "../models/models_0";
import { DecreaseNodeGroupsInGlobalReplicationGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DecreaseNodeGroupsInGlobalReplicationGroupCommand}.
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupCommandInput extends DecreaseNodeGroupsInGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link DecreaseNodeGroupsInGlobalReplicationGroupCommand}.
 */
export interface DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput extends DecreaseNodeGroupsInGlobalReplicationGroupResult, __MetadataBearer {}

/**
 * Decreases the number of node groups in a Global datastore
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DecreaseNodeGroupsInGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   NodeGroupCount: Number("int"), // required
 *   GlobalNodeGroupsToRemove: [ // GlobalNodeGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   GlobalNodeGroupsToRetain: [
 *     "STRING_VALUE",
 *   ],
 *   ApplyImmediately: true || false, // required
 * };
 * const command = new DecreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // DecreaseNodeGroupsInGlobalReplicationGroupResult
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
 * @param DecreaseNodeGroupsInGlobalReplicationGroupCommandInput - {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandInput}
 * @returns {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput}
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *
 * The Global datastore does not exist
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *
 * The Global datastore is not available or in primary-only state.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @public
 */
export class DecreaseNodeGroupsInGlobalReplicationGroupCommand extends command<DecreaseNodeGroupsInGlobalReplicationGroupCommandInput, DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput>(
  _ep0,
  _mw0,
  "DecreaseNodeGroupsInGlobalReplicationGroup",
  DecreaseNodeGroupsInGlobalReplicationGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DecreaseNodeGroupsInGlobalReplicationGroupMessage;
      output: DecreaseNodeGroupsInGlobalReplicationGroupResult;
    };
    sdk: {
      input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput;
      output: DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput;
    };
  };
}
