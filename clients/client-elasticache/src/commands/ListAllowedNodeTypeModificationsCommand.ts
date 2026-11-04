// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AllowedNodeTypeModificationsMessage, ListAllowedNodeTypeModificationsMessage } from "../models/models_0";
import { ListAllowedNodeTypeModifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListAllowedNodeTypeModificationsCommandOutput extends AllowedNodeTypeModificationsMessage, __MetadataBearer {}

/**
 * Lists all available node types that you can scale with your cluster's replication group's current node type.
 *
 * When you use the `ModifyCacheCluster` or `ModifyReplicationGroup` operations to scale your cluster or replication group, the value of the `CacheNodeType` parameter must be one of the node types returned by this operation.
 *
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
 *
 * The requested cluster ID does not refer to an existing cluster.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *
 * The specified replication group does not exist.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
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
export class ListAllowedNodeTypeModificationsCommand extends command<ListAllowedNodeTypeModificationsCommandInput, ListAllowedNodeTypeModificationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAllowedNodeTypeModifications",
  ListAllowedNodeTypeModifications$
) {
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
