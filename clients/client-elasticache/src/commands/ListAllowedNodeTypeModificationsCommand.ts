// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AllowedNodeTypeModificationsMessage, ListAllowedNodeTypeModificationsMessage } from "../models/models_0";
import {
  de_ListAllowedNodeTypeModificationsCommand,
  se_ListAllowedNodeTypeModificationsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAllowedNodeTypeModificationsCommand}.
 */
export interface ListAllowedNodeTypeModificationsCommandInput extends ListAllowedNodeTypeModificationsMessage {}
/**
 * @public
 *
 * The output of {@link ListAllowedNodeTypeModificationsCommand}.
 */
export interface ListAllowedNodeTypeModificationsCommandOutput
  extends AllowedNodeTypeModificationsMessage,
    __MetadataBearer {}

/**
 * <p>Lists all available node types that you can scale with your cluster's replication
 *             group's current node type.</p>
 *          <p>When you use the <code>ModifyCacheCluster</code> or
 *                 <code>ModifyReplicationGroup</code> operations to scale your cluster or replication
 *             group, the value of the <code>CacheNodeType</code> parameter must be one of the node
 *             types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ListAllowedNodeTypeModificationsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // ListAllowedNodeTypeModificationsMessage
 *   CacheClusterId: "STRING_VALUE",
 *   ReplicationGroupId: "STRING_VALUE",
 * };
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * // { // AllowedNodeTypeModificationsMessage
 * //   ScaleUpModifications: [ // NodeTypeList
 * //     "STRING_VALUE",
 * //   ],
 * //   ScaleDownModifications: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAllowedNodeTypeModificationsCommandInput - {@link ListAllowedNodeTypeModificationsCommandInput}
 * @returns {@link ListAllowedNodeTypeModificationsCommandOutput}
 * @see {@link ListAllowedNodeTypeModificationsCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeModificationsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example ListAllowedNodeTypeModifications
 * ```javascript
 * // Lists all available node types that you can scale your Redis cluster's or replication group's current node type up to.
 * const input = {
 *   CacheClusterId: "mycluster"
 * };
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ScaleUpModifications:   []
 * }
 * *\/
 * ```
 *
 * @example ListAllowedNodeTypeModifications
 * ```javascript
 * // Lists all available node types that you can scale your Redis cluster's or replication group's current node type up to.
 * const input = {
 *   ReplicationGroupId: "myreplgroup"
 * };
 * const command = new ListAllowedNodeTypeModificationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ScaleUpModifications: [
 *     "cache.m4.10xlarge",
 *     "cache.m4.2xlarge",
 *     "cache.m4.4xlarge",
 *     "cache.m4.xlarge",
 *     "cache.r3.2xlarge",
 *     "cache.r3.4xlarge",
 *     "cache.r3.8xlarge",
 *     "cache.r3.xlarge"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAllowedNodeTypeModificationsCommand extends $Command
  .classBuilder<
    ListAllowedNodeTypeModificationsCommandInput,
    ListAllowedNodeTypeModificationsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "ListAllowedNodeTypeModifications", {})
  .n("ElastiCacheClient", "ListAllowedNodeTypeModificationsCommand")
  .f(void 0, void 0)
  .ser(se_ListAllowedNodeTypeModificationsCommand)
  .de(de_ListAllowedNodeTypeModificationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAllowedNodeTypeModificationsMessage;
      output: AllowedNodeTypeModificationsMessage;
    };
    sdk: {
      input: ListAllowedNodeTypeModificationsCommandInput;
      output: ListAllowedNodeTypeModificationsCommandOutput;
    };
  };
}
